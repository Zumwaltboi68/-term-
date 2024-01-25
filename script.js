const terminal = document.getElementById('terminal');
const content = document.getElementById('content');
const prompt = document.getElementById('prompt');
const output = document.getElementById('output');

let history = [];
let currentLine = '';

const commands = {
  'help': {
    description: 'Display this help message',
    execute: () => {
      output.innerHTML = `
        <div class="command">help</div>
        <div class="output">Display this help message</div>
        <br>
        <div class="command">ls</div>
        <div class="output">List the contents of the current directory</div>
        <br>
        <div class="command">cd</div>
        <div class="output">Change the current directory</div>
        <br>
        <div class="command">pwd</div>
        <div class="output">Print the current working directory</div>
        <br>
        <div class="command">mkdir</div>
        <div class="output">Create a new directory</div>
        <br>
        <div class="command">rmdir</div>
        <div class="output">Remove a directory</div>
        <br>
        <div class="command">touch</div>
        <div class="output">Create a new file</div>
        <br>
        <div class="command">rm</div>
        <div class="output">Remove a file</div>
        <br>
        <div class="command">cat</div>
        <div class="output">Display the contents of a file</div>
        <br>
        <div class="command">echo</div>
        <div class="output">Display a message</div>
        <br>
        <div class="command">clear</div>
        <div class="output">Clear the terminal</div>
      `;
    }
  },
  'ls': {
    description: 'List the contents of the current directory',
    execute: () => {
      const files = ['README.md', 'index.html', 'style.css', 'script.js'];
      output.innerHTML = `
        <div class="command">ls</div>
        <div class="output">${files.join('\n')}</div>
      `;
    }
  },
  'cd': {
    description: 'Change the current directory',
    usage: 'cd [directory]',
    execute: (args) => {
      if (args.length === 0) {
        output.innerHTML = `
          <div class="command">cd</div>
          <div class="output">Usage: cd [directory]</div>
        `;
      } else {
        const newDirectory = args[0];
        output.innerHTML = `
          <div class="command">cd ${newDirectory}</div>
          <div class="output">Changing directory to ${newDirectory}</div>
        `;
      }
    }
  },
  'pwd': {
    description: 'Print the current working directory',
    execute: () => {
      output.innerHTML = `
        <div class="command">pwd</div>
        <div class="output">/home/user</div>
      `;
    }
  },
  'mkdir': {
    description: 'Create a new directory',
    usage: 'mkdir [directory]',
    execute: (args) => {
      if (args.length === 0) {
        output.innerHTML = `
          <div class="command">mkdir</div>
          <div class="output">Usage: mkdir [directory]</div>
        `;
      } else {
        const newDirectory = args[0];
        output.innerHTML = `
          <div class="command">mkdir ${newDirectory}</div>
          <div class="output">Creating directory ${newDirectory}</div>
        `;
      }
    }
  },
  'rmdir': {
    description: 'Remove a directory',
    usage: 'rmdir [directory]',
    execute: (args) => {
      if (args.length === 0) {
        output.innerHTML = `
          <div class="command">rmdir</div>
          <div class="output">Usage: rmdir [directory]</div>
        `;
      } else {
        const directoryToRemove = args[0];
        output.innerHTML = `
          <div class="command">rmdir ${directoryToRemove}</div>
          <div class="output">Removing directory ${directoryToRemove}</div>
        `;
      }
    }
