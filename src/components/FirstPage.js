import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import {CreatePost} from "./CreateTodo";
import { Login } from './Login';
// import ShowTodoList from './ShowTodoList';
import TodoList from './Todo/TodoList';

function TODOList() {
  return (
    <header>
    <SignedOut>
        <Login/>
      </SignedOut>
      <SignedIn>
        <TodoList/>
      </SignedIn>
    </header>
  )
}

export {TODOList};

