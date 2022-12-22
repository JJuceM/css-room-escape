import React from "react";
import './main.js';
var levels = [
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "Key",
      boardMarkup: `
      <key/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Escape locked room",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door/>
        <locked/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Burn room",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door/>
        <burn/>
        <water/>
      <door/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test stage",
      selector : "test",
      syntax : "Test Stage",
      boardMarkup: `
      <room/>
        <test/>
          <door>
      <room/>
      <test/>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Test ABCDEFG",
      selector : "abc",
      syntax : "ABC Test",
      boardMarkup: `
      <abc><hi/><abc/>
      <div><div>
      `
    }
  ];
  export default levels