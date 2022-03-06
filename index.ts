// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Request{
  method: string;
  uri: string;
  version: string;
  message: string;
  response:string = undefined;
  fulfiller: boolean = false;

  constructor(method: string, uri: string, version:string, message: string){
    this.method = "323";
    this.uri = "323"
    this.version = "this.version3";
    this.message = "this.message3";
  }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
appDiv.innerHTML += '<h1>'+myData.method+'<h1>';
appDiv.innerHTML += '<h1>'+myData.uri+'<h1>';
appDiv.innerHTML += '<h1>'+myData.version+'<h1>';
appDiv.innerHTML += '<h1>'+myData.message+'<h1>';
appDiv.innerHTML += '<h1>'+myData.fulfiller+'<h1>';
appDiv.innerHTML += '<h1>'+myData.response+'<h1>';


