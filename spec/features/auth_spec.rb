require 'rails_helper'

feature "Sign up" do

  it "has a user sign up page", js: true do
    visit root_path
    click_link 'Continue'
    expect(page).to have_content "Sign up"
  end

  it "takes a username and password", js: true do
    visit root_path
    click_link 'Continue'
    expect(page).to have_content "Username"
    expect(page).to have_content "Password"

  end

  it "logs the user in and redirects them to the profiles index on success", js: true do
    sign_up("testing")
    sleep(1)
    expect(page).to have_content "Browse Matches"
  end

  it "displays error messages on failure", js: true do
    sign_up("")
    sleep(1)
    expect(page).to have_content "Username"
  end
end

feature "Sign out" do
  it "has a sign out button", js: true do
    visit root_path
    click_link 'Continue'
    sign_up("testing")
    expect(page).to have_content "Sign Out"
  end

  it "after logout, a user is not allowed access to profiles index and is redirected to splash page", js: true do
    visit root_path
    click_link 'Continue'
    sign_up("testing")
    click_link "Sign Out"

    visit root_path
    expect(page).to have_content "Continue"
  end
end

feature "Sign in" do
  it "has a sign in page", js: true do
    visit root_path
    expect(page).to have_content "Sign in"
  end

  it "takes a username and password", js: true do
    visit root_path
    click_link "Sign in"
    expect(page).to have_field "user[username_or_email]"
    expect(page).to have_field "user[password]"
  end

  it "returns to sign in on failure", js: true do
    visit root_path
    click_link "Sign in"
    expect(page).to have_field "user[username_or_email]"

    fill_in "user[username_or_email]", with: "fake_user"
    fill_in "user[password]", with: "fake_pass"
    click_button "Let\'s go"

    expect(page).to have_content "Sign in"
  end

  it "takes a user to profiles index on success", js: true do
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
    User.last.create_profile

    visit root_path
    find("#sign-in-link").trigger("click")
    sleep(1)
    fill_in "sign-in-username", with: "testuser"
    fill_in "sign-in-password", with: "testpass"
    click_button "Let's go"

    expect(page).to have_content "Browse Matches"
  end
end
