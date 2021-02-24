import React from "react";
import {Redirect, Route, Switch } from "react-router";
import Author from "./Author";
import styles from './Blog.module.css'
import Category from "./Category";
import Createpost from "./CreatePost";
import Post from "./Post";
import Posts from "./Posts";
import RecentPost from "./RecentPost";
export default function Blog() {
  return (
    <>
      <div className={`${styles.blogPadding} py-16`}>

        <div class="px-6 py-8">
          <div class="flex justify-between container mx-auto">
            <div class="w-full lg:w-8/12 mr-4">
              <Createpost />
              <Switch>
                <Route path="/blog/blogs/all" exact component={Posts} />
                <Route path="/blog/blogs/:id" exact component={Post} />
                <Redirect from="/blog/blogs" to="/blog/blogs/all" />
              </Switch>
            </div>
            <div class="-mx-8 w-4/12 hidden lg:block mt-6">
              <div class="px-8">
                <Author />
              </div>
              <div class="mt-10 px-8">
                <Category />
              </div>
              <div class="mt-10 px-8">
                <RecentPost />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}