#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const vitePreview = spawn('npx', ['vite', 'preview'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

vitePreview.on('error', (error) => {
  console.error('Failed to start vite preview:', error);
  process.exit(1);
});

vitePreview.on('exit', (code) => {
  process.exit(code);
});
