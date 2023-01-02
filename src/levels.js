import React from "react";
import './main.js';
var levels = [
    {
      selectorName : "Type Selector",
      doThis : "Select the door",
      selector : "door",
      syntax : "Door",
      boardMarkup: `
      <door></door>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the fakedoor",
      selector : "fakedoor",
      syntax : "Fake Door",
      boardMarkup: `
      <door></door>
      <fakedoor></fakedoor>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the locked door",
      selector : "lockeddoor",
      syntax : "Locked Doom",
      boardMarkup: `
      <door></door>
      <fakedoor></fakedoor>
      <lockeddoor></lockeddoor>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the box",
      selector : "box",
      syntax : "New Box",
      boardMarkup: `
      <lockeddoor></lockeddoor>
      <box></box>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the key",
      selector : "key",
      syntax : "New Key",
      boardMarkup: `
      <lockeddoor></lockeddoor>
      <key></key>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the table",
      selector : "table",
      syntax : "New Table",
      boardMarkup: `
      <box></box>
      <lockeddoor></lockeddoor>
      <table></table>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select the axe",
      selector : "axe",
      syntax : "New Axe",
      boardMarkup: `
      <door></door>
      <axe></axe>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select two door",
      selector : "door",
      syntax : "Key",
      boardMarkup: `
      <door></door>
      <door></door>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select three door",
      selector : "door",
      syntax : "Locked Room",
      boardMarkup: `
      <door></door>
      <door></door>
      <door></door>
      `
    },
    {
      selectorName : "Type Selector",
      doThis : "Select water",
      selector : "water",
      syntax : "Burn Room",
      boardMarkup: `
      <door></door>
      <water></water>
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