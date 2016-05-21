require 'rails_helper'
require 'spec_helper'

RSpec.describe "User", type: :model do
  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "testuser",
                  password: "testpass",
                  email: "testing@test.com",
                  gender: "Female",
                  zip_code: "11111",
                  country: "United States",
                  month: "01",
                  day: "01",
                  year: "1990",
                  sex_orientation: "Straight")
      user = User.find_by_username("testuser")
      expect(user.password).not_to be("testpass")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "testuser",
              password: "testpass",
              email: "test@test.com",
              gender: "Female",
              zip_code: "11111",
              country: "United States",
              month: "01",
              day: "01",
              year: "1990",
              sex_orientation: "Straight")
    end
  end
end
