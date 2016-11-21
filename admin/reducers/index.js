/**
 * Created by Thram on 9/11/16.
 */
import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux'
import app from "./app";

export default combineReducers({app, routing: routerReducer});