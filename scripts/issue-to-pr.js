const { execSync } = require("child_process");

console.log("# Convert issue to PR based on branch name");

console.log("## Requirements");
console.log("[✅] git version greater than 2.22.0");
console.log("## Road Map");
console.log("[✅] Step 1: Get current branch name");
console.log("[❌] Step 2: Parse branch name to apply the checks");
console.log("[✅] Step 3: Get issue's number");
console.log("[❌] Step 4: Check that the issue exist");
console.log("[❌] Step 5: Check if PR already exist, return PR's URL");
console.log("[❌] Step 6: Run command to convert issue into a pull request");
console.log("[❌] Step 7: Add tests");

// Check requirements
const checkGitVersion = async () => {
  const gitVersion = await execSync("git --version")
    .toString()
    .replace(/(\r\n|\n|\r)/gm, "")
    .split(" ")[2]
    .split(".");

  const minimumMajorVersion = 2;
  const minimumMinorVersion = 22;
  const currentMajorVersion = parseInt(gitVersion[0]);
  const currentMinorVersion = parseInt(gitVersion[1]);

  if (minimumMajorVersion < currentMajorVersion) {
    return true;
  }

  if (minimumMajorVersion === currentMajorVersion) {
    if (minimumMinorVersion <= currentMinorVersion) {
      return true;
    }
  }

  return false;
};

const getCurrentBranch = async () => {
  const branchName = await execSync("git branch --show-current")
    .toString()
    .replace(/(\r\n|\n|\r)/gm, "");
  const [issueId, label] = branchName.split("/");

  return {
    issueId,
    label,
    branchName,
  };
};

const main = async () => {
  // Step 0: Requirements
  const isGitVersionOk = await checkGitVersion();

  if (!isGitVersionOk) {
    console.log("Your version is older than 2.22.0");
    return;
  }

  const currentBranch = await getCurrentBranch();

  console.log("## Application");
  console.log("Copy the following command:");
  console.log(
    `gh api repos/evelyne-phich/les-bonnes-recettes-d-evy/pulls -f head=${currentBranch.branchName} -f base=main -F issue=${currentBranch.issueId}`
  );
};

main();
