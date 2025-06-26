# Contributing to Prompt Craft

Thank you for your interest in contributing to Prompt Craft! This repository thrives on community contributions
that help expand our collection of prompt engineering techniques and AI-assisted development workflows.

## 🌟 Ways to Contribute

### Content Contributions

- **Add new prompt patterns** following CREATE Framework structure
- **Contribute Quality Pyramid templates** for systematic validation
- **Share workflow examples** for real-world use cases
- **Create industry-specific applications** and case studies
- **Develop learning resources** and educational content

### Quality Improvements

- **Improve existing documentation** with systematic methodology
- **Enhance prompt templates** for better CREATE Framework compliance
- **Add cross-model compatibility** testing and validation
- **Fix bugs** in prompts, documentation, or broken links

### Infrastructure Contributions

- **Report issues** or suggest systematic improvements
- **Enhance validation scripts** and development tooling
- **Improve CI/CD processes** and quality assurance

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top of this repository to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/prompt-craft.git
cd prompt-craft
```

### 3. Set Up Development Environment

Before making changes, set up the development environment for validation:

```bash
# Install dependencies for validation
npm install

# Test that validation works
npm test
```

**📋 Read the Development Guide**: Review [DEVELOPMENT.md](DEVELOPMENT.md) for complete setup instructions,
available validation scripts, and CI integration details.

### 4. Create a Branch

Create a descriptive branch name for your contribution:

```bash
git checkout -b feature/add-debugging-prompts
git checkout -b fix/update-broken-links
git checkout -b docs/improve-getting-started
```

### Branch Naming Conventions

- `feature/` - New functionality or content
- `fix/` - Bug fixes or corrections
- `docs/` - Documentation improvements
- `refactor/` - Code or content restructuring

## 📝 Contribution Guidelines

### Content Standards

**All contributions should follow our systematic methodology:**

- **CREATE Framework compliance**: Follow Character, Request, Examples, Adjustments, Type, Extras structure
- **Quality Pyramid principles**: Ensure Completeness, Accuracy, Relevance, and Efficiency
- Be practical and tested in real scenarios
- Include clear examples and use cases
- Follow the existing documentation style and systematic approach
- Be cross-model compatible when possible
- Include proper attribution for sources

**📋 Methodology Reference**: Review [methodology/README.md](methodology/README.md) for comprehensive framework guidance.

### File Organization

When adding new content, place it in the appropriate directory:

```text
methodology/        - Core CREATE Framework and Quality Pyramid principles
prompts/           - Ready-to-use prompt patterns organized by use case and role
guides/            - Implementation guidance and quick reference materials
examples/          - Real-world applications and case studies
learning-resources/ - Structured learning pathways and training materials
```

### Documentation Format

- Use clear, descriptive headings
- Include practical examples
- Add "Why this works" explanations
- Provide implementation notes
- Use consistent markdown formatting

### Example Contribution Structure

```markdown
# Technique Name

## Overview
Brief description of what this technique accomplishes.

## When to Use
- Specific scenarios where this is effective
- Context where it provides value

## Implementation
Step-by-step instructions with examples.

## Example
\```
[Actual prompt example]
\```

## Why This Works
Explanation of the underlying principles.

## Variations
Alternative approaches or modifications.
```

## 🔄 Submission Process

### 1. Make Your Changes

- Follow the content standards above
- Test your prompts with multiple LLMs if possible
- Ensure all links and references work correctly

### 2. Validate Locally Before Committing

**🔍 Always validate your changes locally before committing:**

```bash
# Run comprehensive validation (recommended)
npm test

# Or run specific validation checks
npm run lint              # Check markdown formatting
npm run lint:fix          # Auto-fix markdown issues
npm run validate          # Full systematic validation
```

**What the validation checks:**

- **Markdown linting**: Ensures consistent formatting and style
- **Repository structure**: Validates required directories and files exist
- **CREATE Framework compliance**: Checks prompt templates follow systematic methodology
- **Quality Pyramid principles**: Ensures educational content meets quality standards
- **Link validation**: Verifies all links work correctly (run manually with npm run link-check)

**💡 Pro tip**: Run `npm run lint:fix` to automatically fix most markdown formatting issues before committing.

### 3. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add: Debugging workflow for API integration issues"
git commit -m "Fix: Broken links in getting started guide"
git commit -m "Docs: Improve clarity in prompt structure section"
```

### Commit Message Format

```text
Type: Brief description

Optional longer description if needed.
```

**Types:**

- `Add:` - New content or features
- `Fix:` - Bug fixes or corrections  
- `Update:` - Improvements to existing content
- `Docs:` - Documentation changes
- `Refactor:` - Restructuring without changing functionality

### 4. Push to Your Fork

```bash
git push origin your-branch-name
```

### 5. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and the main repository's `main` branch
4. Fill out the PR template (see below)

## 📋 Pull Request Template

When creating a PR, please include:

```markdown
## Description
Brief description of your changes.

## Type of Change
- [ ] New prompt technique/workflow
- [ ] Bug fix
- [ ] Documentation improvement
- [ ] Content update/enhancement

## Testing
- [ ] Ran local validation (`npm test`)
- [ ] Fixed all markdown linting issues (`npm run lint:fix`)
- [ ] Tested prompts with ChatGPT
- [ ] Tested prompts with Claude  
- [ ] Tested prompts with other LLMs (specify which)
- [ ] Links and references verified

## Content Checklist
- [ ] Follows existing style guidelines
- [ ] Includes practical examples
- [ ] Explains underlying principles
- [ ] Placed in appropriate directory
- [ ] Updates relevant index/README files

## Additional Notes
Any special considerations or context for reviewers.
```

## 🎯 Content Ideas We're Looking For

### High Priority

- Industry-specific workflow templates
- Advanced prompt engineering techniques
- Real-world case studies with metrics
- Integration patterns with development tools

### Medium Priority

- Troubleshooting guides
- Prompt optimization techniques
- Cross-model compatibility insights
- Performance benchmarking approaches

### Always Welcome

- Grammar and spelling fixes
- Broken link repairs
- Clarity improvements
- Translation contributions

## 📚 Resources for Contributors

### Prompt Engineering Best Practices

- Keep prompts clear and specific
- Include context and constraints
- Use examples when helpful
- Test across different scenarios

### Writing Style Guide

- Use active voice
- Write in second person ("you")
- Include practical examples
- Explain the "why" behind techniques

### Testing Your Contributions

Before submitting, ensure quality with our systematic validation:

1. **Run automated validation**: `npm test` (covers structure, linting, and methodology compliance)
2. **Test prompts with multiple LLMs**: Verify effectiveness across ChatGPT, Claude, and others
3. **Verify links work correctly**: Run `npm run link-check` for comprehensive link validation
4. **Check formatting**: Use `npm run lint:fix` to auto-correct markdown issues
5. **Ensure examples are reproducible**: Test all code examples and prompt demonstrations

**📚 Development Reference**: See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed validation features and CI setup.

## 🤝 Community Guidelines

- **Be respectful** and constructive in all interactions
- **Follow systematic methodology** - apply CREATE Framework and Quality Pyramid principles
- **Give credit** where credit is due
- **Share knowledge** freely and openly
- **Help others** learn and improve through systematic approaches
- **Ask questions** if anything is unclear about the methodology or implementation

## 🔧 Development Workflow Summary

**Quick Reference for Contributors:**

1. **Setup**: `git clone` → `npm install` → `npm test`
2. **Develop**: Create branch → Make changes → Follow CREATE Framework
3. **Validate**: `npm test` → `npm run lint:fix` → Test prompts across models
4. **Submit**: Commit → Push → Create PR with systematic validation checklist

**📋 See [DEVELOPMENT.md](DEVELOPMENT.md) for complete development environment setup and validation details.**

## 🚨 Reporting Issues

Found a problem? Please open an issue with:

- **Clear description** of the problem
- **Steps to reproduce** (if applicable)
- **Expected vs. actual behavior**
- **Screenshots or examples** when helpful

## 📞 Getting Help

- **General questions**: Open a discussion
- **Specific issues**: Create an issue
- **Contribution ideas**: Start a discussion
- **Quick questions**: Comment on relevant PRs

## 🙏 Recognition

All contributors who follow our systematic methodology will be:

- **Listed in our contributors section** with their systematic contributions highlighted
- **Credited in relevant documentation** for their CREATE Framework and Quality Pyramid improvements
- **Invited to join our contributor community** for ongoing methodology development and refinement

Thank you for helping make Prompt Craft a systematic, high-quality resource for everyone! 🚀

---

*Remember: Great contributions follow systematic methodology—focus on CREATE Framework compliance, Quality Pyramid
principles, and practical value that scales from individual to organizational use.*
