# react is a library
# library takes minimal effort to add
# know abt cdn
# bundler -------
vite, web pack,parcel are bundlers
minify, optimize, bundle,remove console logs these all are can be done by bundlers

create react app uses web pack 
here we use parcel.

What is parcel?
It is package which is a bundler

npm init to initlaize project with npm package

npm is used to manage packages
# npm is like # maven for ui

# to add parcel
npm install parcel
we want parcel only on dev machine not on production 
so we add npm instakk -D parcel
-D means dev dependency

# package-lock.json
package-lock.json never to keep in gitignore
it will lock the versions
it will tells us the exact version we are using

it also maintains integrity as it maintains a hash
based on this hash also we can check if we have same version on production and dev machine

# node modules
we should not add node modules to git
beacause node modules are heaviest things

we don't put on git beacuse our 
package-lock.josn has sufficeint info to recreate node modules on server

npm intsall react
npm install react-dom

To ignite our app

npx parcel index.html
-> it means execute parcel using index.html as entry point
npx means execute using npm

parcel does hot module replaacement
i.e. if we make any chnages in file, parcel will keep track and relect immediately
parcel uses FILE WATCHER ALGORITHM to bring this functionality
this algo is written in C++.

npx parcel build index.html
this will create production build and push to dist folder

this will create production ready code like minify etc

parcel manages dev and prod build
parcel minifying app

we have package manager which handles transitives dependecies of our code
# depemdecy depending on another dependecy is transitive dependency

# Q) what does more time to load on website
media,images,
parcel takes image optimization as well
parcel does caching while development

# why react is fast?
