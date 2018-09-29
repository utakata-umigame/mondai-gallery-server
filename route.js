'use strict';

const express = require('express');
const crypto = require('crypto');
const moment = require('moment');
const db = require('./mongo');
const passport = require('./passport');
const apis = require('./api');
const router = express();

// Public routes
router.get("/", apis.root);
router.get("/profile/show/:id", apis.profileFromID);
router.get("/mondaiList", apis.allList);
router.get("/mondaiList/show/:id", apis.listFromID);
router.post("/signup", apis.signUp);

// Login
router.post("/login", passport.authenticate('local'), apis.login);

// Routes that require authentication
router.get("/user", isAuthenticated, apis.user);
router.get("/mypage", isAuthenticated, apis.myPage);
router.get("/logout", isAuthenticated, apis.logout);
router.post("/profile/edit", isAuthenticated, apis.editProfile);
router.post("/mondaiList/edit/:id", isAuthenticated, apis.editList);
router.post("/add", isAuthenticated, apis.addList);

function isAuthenticated (req, res, next) {
  // 認証チェック
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.json({"error": "Authentication failed"});
  }
}

module.exports = router;
