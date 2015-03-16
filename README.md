# DISTILLD

[Heroku link][heroku]

[heroku]: http://distilld.herokuapp.com

## Minimum Viable Product
DISTILLD is a clone of UNTAPPD built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create posts
- [x] User search
- [x] Create friendships
- [x] View a feed of all friends' posts
- [x] View friend's profile page
- [x] Comment on posts



## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Post Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create posts using
a simple text form in a Rails view. I also plan to integrate Paperclip for file upload so
users can add images to their profile. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Post CRUD (~1 days)
I will add API routes to serve post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create and view posts, all
inside a single Backbone app. I plan on using Paperclip again here so
users can add images to posts.

[Details][phase-two]

### Phase 3: User Search (~1 days)
I will add a route to a user search page and create a view that will display results. By the end of this phase, users will be able to search for other users in the database.

[Details][phase-three]

### Phase 4: Friendships (~1 days)
I will add a friendship and model controller to the rails app then add Backbone
models and collections that fetch data from those routes. By the end of this phase, users will be able to create friendships with other users.

[Details][phase-four]

### Phase 5: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`friends` association to serve a list of posts ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts`
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

[Details][phase-five]

### Phase 6: Profile Page (~1-2 days)
I'll start by adding a `user-profile` route that uses the `selected-user`
to serve a list of posts ordered chronologically. On the Backbone side, I'll make a `UserPostShow` view whose `posts` collection fetches from the new route.  Ultimately, this will allow a 'user' to view all the 'posts' of a selected 'user'.

[Details][phase-six]

### Phase 7 (Bonus): Toasts (~1 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`friends` association to serve a list of posts ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts`
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

[Details][phase-seven]


### Phase 8 (Bonus): Searching for Drinks, Venues & Distilleries (~2 days)
I'll need to add `search` routes to both the Venues and Distilleries controllers. On the
Backbone side, there will be a `SearchResults` composite view has `DrinksIndex, `VenuesIndex`, and `DistilleriesIndex` subviews. These views will use plain old `drinks`, 'venues' and `distilleries` collections, but they will fetch from the new `search` routes. The three different searches will be in the same view but they will be hidden and revealed when their tab is selected. Only one index will be displayed at a time. I also plan on using Google Maps Embed API to display locations on a map.

[Details][phase-eight]

### Bonus Features (TBD)
- [ ] Toast (like) posts
- [ ] Search for drinks
- [ ] Search for venues
- [ ] Search for distilleries
- [ ] Wishlists
- [ ] User activity history
- [ ] Toasting nots
- [ ] Pagination/infinite scroll
- [ ] Add badges
- [ ] Add plugin for dynamically selecting drink rating in post.
- [ ] Multiple sessions/session management
- [ ] Notifications


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7_bonus.md
[phase-eight]: ./docs/phases/phase8_bonus.md
