# TBD

[Heroku link][heroku]

[heroku]: TBD

## Minimum Viable Product
TBD is a clone of OKCupid built on Rails and Backbone. Users can:


- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create profiles
- [ ] Create questions/question_choices
- [ ] Create messages (send)
- [ ] View profiles and messages
- [ ] Like Profiles
- [ ] View a index of profiles
- [ ] Search for profiles by username
- [ ] Search for profiles by age/orientation/body-type/gender/etc

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Profile/Messages (~1 day)
I will implement user authentication in Backbone based on the practices learned at
App Academy. By the end of this phase, users will be able to create/view profiles and send/receive messages using a simple text form in a Backbone view

[Details][phase-one]

### Phase 2: Questions and Likes (~1 days)
By the end of this phase, users will be able to create/answer questions and like profiles, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: CSS (~2 days)
This phase will consist of making the website look presentable.

[Details][phase-three]

### Phase 4: Matching Algorithm (~1-2 days)
This phase will implement a matching algorithm that will take users' answer choices and answer importance and create a match % by comparing these to other users's answer choices and importances.

[Details][phase-four]

### Phase 5: Searching for Profiles (~2 days)
This phase will allow users to be able to filter the profiles index by
criteria that they specify such as age-range, gender, orientation, religion, etc.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] "Like" button and counter for posts
- [ ] Custom blog urls
- [ ] Pagination/infinite scroll
- [ ] Activity history (e.g. likes, reblogs, taggings)
- [ ] Post types (image posts, quote posts, etc)
- [ ] Reblogging
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
