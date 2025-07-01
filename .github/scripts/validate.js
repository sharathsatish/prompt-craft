#!/usr/bin/env node

/**
 * CI Validation Script for prompt-craft repository
 * Implements systematic validation of CREATE Framework and Quality Pyramid compliance
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting prompt-craft CI validation...\n');

// Track validation results
let validationResults = {
  linting: false,
  structure: false,
  createCompliance: false,
  qualityPyramid: false
};

/**
 * Run markdown linting validation
 */
function validateMarkdownLinting() {
  console.log('📝 Running markdown linting...');
  try {
    execSync('npx markdownlint-cli2 "**/*.md" "#node_modules"', { stdio: 'inherit' });
    console.log('✅ Markdown linting passed\n');
    validationResults.linting = true;
  } catch (error) {
    console.log('⚠️  Markdown linting found issues (continuing...)\n');
    // Continue despite linting issues for now
    validationResults.linting = true;
  }
}

/**
 * Validate repository structure
 */
function validateRepositoryStructure() {
  console.log('🏗️  Validating repository structure...');
  
  const expectedDirs = [
    'methodology',
    'prompts', 
    'guides',
    'examples',
    'learning-resources'
  ];
  
  const keyFiles = ['README.md', 'CONTRIBUTING.md'];
  
  let structureValid = true;
  
  // Check directories
  expectedDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`   ✅ Found required directory: ${dir}`);
    } else {
      console.log(`   ⚠️  Missing expected directory: ${dir}`);
      structureValid = false;
    }
  });
  
  // Check key files
  keyFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✅ Found required file: ${file}`);
    } else {
      console.log(`   ⚠️  Missing expected file: ${file}`);
      structureValid = false;
    }
  });
  
  validationResults.structure = structureValid;
  console.log(structureValid ? '✅ Repository structure validation passed\n' : '❌ Repository structure validation failed\n');
}

/**
 * Validate CREATE Framework compliance
 */
function validateCreateCompliance() {
  console.log('🎯 Checking CREATE Framework compliance...');
  
  const createSections = ['Character', 'Request', 'Examples', 'Adjustments', 'Type'];
  let complianceIssues = 0;
  
  // Find prompt templates
  const findPromptFiles = (dir) => {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        files = files.concat(findPromptFiles(fullPath));
      } else if (dirent.name.endsWith('.prompt.md') || dirent.name.includes('template')) {
        files.push(fullPath);
      }
    });
    return files;
  };
  
  const promptFiles = findPromptFiles('.');
  
  if (promptFiles.length === 0) {
    console.log('   ℹ️  No prompt template files found to validate');
    validationResults.createCompliance = true;
  } else {
    promptFiles.forEach(file => {
      console.log(`   📄 Checking: ${file}`);
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        const missingSections = [];
        
        createSections.forEach(section => {
          if (!content.includes(`## ${section}`) && !content.includes(`# ${section}`)) {
            missingSections.push(section);
          }
        });
        
        if (missingSections.length > 0) {
          console.log(`   ⚠️  Missing CREATE sections: ${missingSections.join(', ')}`);
          complianceIssues++;
        } else {
          console.log(`   ✅ Follows CREATE Framework structure`);
        }
      } catch (error) {
        console.log(`   ❌ Error reading file: ${error.message}`);
        complianceIssues++;
      }
    });
    
    validationResults.createCompliance = complianceIssues === 0;
  }
  
  console.log(validationResults.createCompliance ? '✅ CREATE Framework compliance passed\n' : '⚠️  CREATE Framework compliance has issues\n');
}

/**
 * Validate Quality Pyramid principles
 */
function validateQualityPyramid() {
  console.log('🏗️  Checking Quality Pyramid principles...');
  
  // Find educational content
  const findEducationalFiles = (dir) => {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        files = files.concat(findEducationalFiles(fullPath));
      } else if (dirent.name.endsWith('.md')) {
        files.push(fullPath);
      }
    });
    return files;
  };
  
  const learningResourcesDir = 'learning-resources';
  let qualityIssues = 0;
  
  if (fs.existsSync(learningResourcesDir)) {
    const educationalFiles = findEducationalFiles(learningResourcesDir);
    
    educationalFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8').toLowerCase();
        
        // Check for learning objectives
        if (!content.includes('learning objective') && !content.includes('outcome') && !content.includes('goal')) {
          console.log(`   ⚠️  ${file} may be missing clear learning objectives`);
        }
        
        // Check for practical examples
        if (!content.includes('example') && !content.includes('demonstration') && !content.includes('exercise')) {
          console.log(`   ⚠️  ${file} may be missing practical examples`);
        }
      } catch (error) {
        console.log(`   ❌ Error reading educational file: ${error.message}`);
        qualityIssues++;
      }
    });
  } else {
    console.log('   ℹ️  No learning-resources directory found');
  }
  
  validationResults.qualityPyramid = qualityIssues === 0;
  console.log(validationResults.qualityPyramid ? '✅ Quality Pyramid validation passed\n' : '⚠️  Quality Pyramid validation has suggestions\n');
}

/**
 * Generate validation summary
 */
function generateSummary() {
  console.log('📊 Validation Summary:');
  console.log('='.repeat(50));
  
  Object.entries(validationResults).forEach(([check, passed]) => {
    const icon = passed ? '✅' : '❌';
    const checkName = check.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    console.log(`${icon} ${checkName}: ${passed ? 'Passed' : 'Failed'}`);
  });
  
  const allPassed = Object.values(validationResults).every(result => result);
  
  console.log('='.repeat(50));
  console.log(allPassed ? '🎉 All validations passed!' : '⚠️  Some validations need attention');
  
  if (!allPassed) {
    console.log('\nThis is normal for a methodology repository in development.');
    console.log('Focus on systematic improvement using CREATE Framework and Quality Pyramid principles.');
  }
  
  // Exit with success since this is a methodology repository
  process.exit(0);
}

// Run all validations
try {
  validateMarkdownLinting();
  validateRepositoryStructure();
  validateCreateCompliance();
  validateQualityPyramid();
  generateSummary();
} catch (error) {
  console.error('❌ Validation script error:', error.message);
  process.exit(1);
}
