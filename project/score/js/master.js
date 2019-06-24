'use strict';

$(function () {
  try {
    if (window.self !== window.top) {
      //document.querySelector('iframe').contentWindow.parent = parent;
      window.site = parent.site;
    }
  } catch (e) { }
});

function urlParam(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ?
        true : decodeURIComponent(sParameterName[1]);
    }
  }
}

function guard(grants = []) {
  if (parent.site == undefined || !parent.site.auth.hasLogged) {
    window.location.href = 'login.html';
  }

  for (var i = 0; i < grants.length; ++i) {
    if (!parent.site.auth.user.can(grants[i])) {
      window.location.href = 'insufficient.html';
    }
  }
}

class User {
  constructor(username, pass, grants) {
    this.username = username;
    this.password = pass;
    this.grants = grants;
  }

  can(key) {
    return this.grants.includes(key);
  }
}

const users = [
  new User('admin', 'admin', ['read', 'write']),
  new User('readonly', 'readonly', ['read']),
];

class Auth {
  constructor() {
    this.user = null;
  }

  login(user, pass) {
    for (var i = 0; i < users.length; ++i) {
      if (users[i].username == user && users[i].password == pass) {
        this.user = users[i];
        return this.user;
      }
    }

    return null;
  }

  logout() {
    this.user = null;
  }

  get hasLogged() { return this.user != null; }
}

class StudentModel {
  constructor(id, name) {
    this.id = id;
    this.name = name;

    this.math = 0;
    this.english = 0;
    this.korean = 0;
  }

  get total() { return this.math + this.english + this.korean; }
  get avg() { return this.total / 3; }
  get grade() {
    return;
  }
}

class Storage {
  constructor(storageInstance) {
    this.storage = storageInstance;
  }

  getStudent(id) {
    return JSON.parse(this.storage.getItem(id));
  }

  saveStudent(student) {
    this.storage.setItem(student.id, JSON.stringify(student));
  }

  dropStudent(id) {
    this.storage.removeItem(id);
  }
}

