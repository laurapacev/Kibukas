# Kibukas develop branch
Branch is used for development purpose. After making a final version that meets Jira sprint goal, this branch must be merging with main branch.

## Get started
Clone GitHub repository to local environment
```
git clone https://github.com/laurapacev/Kibukas.git
```

## Instructions and workflow for repository
**1. Switch to develop branch**
```
git checkout develop
```

**2. Pull latest version**
```
git pull
```

**3. Make changes locally**

**4. Add changes to stash**
```
git add .
```

**5. Commit changes**
```
git commit -m 'commit message'
```

**6. Push changes to GitHub**
```
git push origin develop
```

**7. Pull latest version**
```
git pull
```

## Instructions for Vue project
**1. From project root, navigate to Vue app**
```
cd app
```

**2. Install required dependencies**
```
npm install
```

**3. Run project in local environment**
```
npm run serve
```

**4. Local and network urls will be displayed in console**

**EXTRA. Build project (might be required for random test cases)**
```
npm run build
```
