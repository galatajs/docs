---
footer: false
lastUpdated: true
contributors: true
layout: IstanbulLayout
---

# Contribute to Istanbul

Thank you for wanting to contribute to <span class="text-primary">IstanbulJS</span>!

You can follow the steps below to contribute to <span class="text-primary">IstanbulJS</span>.

## Contents

- [Contribute to Istanbul](#contribute-to-istanbul)
  - [Contents](#contents)
  - [prerequisites](#prerequisites)
  - [Before Contribution Code](#before-contribution-code)
    - [Fork The Repository](#fork-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Check Issues is Exist](#check-issues-is-exist)
    - [Create a Issue](#create-a-issue)
    - [Wait Assign](#wait-assign)
  - [Create a Branch](#create-a-branch)
  - [Make Changes](#make-changes)
  - [Test Changes](#test-changes)
  - [Commit Changes](#commit-changes)
  - [Push Changes](#push-changes)
  - [Create a Pull Request](#create-a-pull-request)
  - [Review Process](#review-process)

## prerequisites

- [Node.js](https://nodejs.org/en/) >= 18
- [Git](https://git-scm.com/)

## Before Contribution Code

The project welcomes code patches, but to make sure things are well coordinated you should discuss any significant change before starting the work. It's recommended that you signal your intention to contribute in the issue tracker, either by filing a new issue or by claiming an existing one.

### Fork The Repository

Fork the repository on GitHub and clone it locally.

```bash:no-line-numbers
git clone <project_url>
```

### Install Dependencies

```bash:no-line-numbers
npm install
```

### Check Issues is Exist

Whether you already have an idea for a contribution or you want to find something to work on, check the issue tracker for existing issues that relate to your contribution. If you find an existing issue, claim it by leaving a comment on the issue.

### Create a Issue

If you don't find an existing issue that relates to your contribution, create a new issue. Be sure to describe the problem you want to solve, and include enough information for others to understand the context and the desired solution.

### Wait Assign

After you create a issue, wait for the project maintainers to assign the issue to you. If you don't get a response within a few days, feel free to leave a comment on the issue to ask for an update.

## Create a Branch

Create a branch for your contribution.

```bash:no-line-numbers
git checkout -b <branch_name> 
```

Branch name should be `feature/<issue_number>-<issue_title>`.

## Make Changes

Make your changes.

## Test Changes

Run the tests to make sure your changes don't break anything.

```bash:no-line-numbers
npm test
```

If your change requires unit test, type them under the tests folder and make sure the tests pass.

## Commit Changes

Commit your changes.

```bash:no-line-numbers
git commit -m "<commit_message>"
```

Commit message should be `feat: <issue_number> <issue_title>`. For example, `feat: 1 Add a new feature`.

or `fix: <issue_number> <issue_title>`. For example, `fix: 1 Fix a bug`.

## Push Changes

Push your changes to your fork.

```bash:no-line-numbers
git push origin <branch_name>
```

## Create a Pull Request

Create a pull request to the main repository. Be sure to include a description of your changes and reference the issue number.

## Review Process

The project maintainers will review your pull request and either merge it, request changes to it, or close it with an explanation.

If you have any questions, feel free to leave a comment on the issue or pull request.