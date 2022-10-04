# Contributing to this project

A big welcome and thank you for considering contributing to this open source project!

Reading and following these guidelines will help us make the contribution process easy and effective for everyone involved. It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, we will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

## Quicklinks

* [Code of Conduct](https://github.com/DhanushNehru/calculator/blob/master/CODE-OF-CONDUCT.md)
* [Getting Started](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
)
    * [Issues](https://github.com/DhanushNehru/calculator/issues)
    * [Pull Requests](https://github.com/DhanushNehru/calculator/pulls)

## Code of Conduct

We take our open source community seriously and hold ourselves and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold our [Code of Conduct](https://github.com/DhanushNehru/calculator/blob/master/CODE-OF-CONDUCT.md).

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

- Search for existing Issues and PRs before creating your own.
- We work hard to makes sure issues are handled in a timely manner but, depending on the impact, it could take a while to investigate the root cause. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.

### Issues

Issues should be used to report problems with this project, request a new feature, or to discuss potential changes before a PR is created.
If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

### Pull Requests

PRs to this project are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

- Only fix/add the functionality in question **OR** address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.

For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

In general, we follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr)

1. Fork this repository to your own Github account by clicking the **Fork** button.
    <br><img src="https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png" title="Fork image" width="400"/>
2. **Clone** your forked repository to your local machine
    <br><img src="https://docs.github.com/assets/images/help/repository/code-button.png" title="Code button" width="400"/>

    For example, run this command inside your terminal:

    ```bash
    git clone https://github.com/<your-github-username>/Python_Projects.git
    ```

    **Replace \<your-github-username\> with your GitHub Username!**

    Learn more about [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [cloning a repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
3. Create a development branch locally with a succinct but descriptive name
    ```bash
    git checkout -b <branch-name>
    ```
4. Add & commit changes to the branch with `git add`, `git commit` ([write a good commit message](https://chris.beams.io/posts/git-commit/), if possible):

    ```bash
    git add -A
    git commit -m "<your message>"
    ```
5.  Before you make any changes, [keep your fork in sync](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/) to avoid merge conflicts:

    ```bash
    git remote add upstream https://github.com/Arindam200/Python_Projects.git
    git fetch upstream
    git pull upstream master
    git push
    ```
    
    Alternatively, GitHub also provides syncing now - click "Fetch upstream" at the top of your repo below "Code" button.
6. Following any formatting and testing guidelines specific to this repo
7. Push changes to your fork
    ```bash
    git push origin <branch-name>
    ```
8. Open a PR in our repository on the GitHub page of _your fork_, and **make a pull request**:
    ![pull request image](https://docs.github.com/assets/cb-26223/images/help/pull_requests/pullrequest-send.png)

    Read more about pull requests on the [GitHub help pages](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
- Now wait, until one of  your Pull Request*! If there are any conflicts, you will get a notification.
