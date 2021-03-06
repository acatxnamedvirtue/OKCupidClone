json.array!(@profiles) do |profile|
  json.extract!(profile, :id, :self_summary, :what_im_doing, :im_really_good_at,
    :favorites, :six_things, :friday_night, :message_me_if, :orientation, :ethnicity,
    :height, :body_type, :diet, :smokes, :drinks, :drugs, :religion, :sign, :education,
    :job, :income, :status, :relationship_type, :offspring, :pets, :speaks, :thinking_about)

  json.user do
    json.extract!(profile.user, :id, :username, :email, :country, :zip_code, :year, :gender)
  end

  json.profile_pic asset_path(profile.profile_pic.url)
end
