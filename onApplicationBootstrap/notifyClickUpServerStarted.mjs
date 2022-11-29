export async function notifyClickUpServerStarted() {
  const teamId = process.env.TEAM_ID;
  const resp = await fetch(`https://api.clickup.com/api/v2/team/${teamId}/webhook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
    body: JSON.stringify({
      endpoint: process.env.HOST,
      events: [
        "taskCreated",
        "taskUpdated",
        "taskDeleted",
        "taskPriorityUpdated",
        "taskStatusUpdated",
        "taskAssigneeUpdated",
        "taskDueDateUpdated",
        "taskTagUpdated",
        "taskMoved",
        "taskCommentPosted",
        "taskCommentUpdated",
        "taskTimeEstimateUpdated",
        "taskTimeTrackedUpdated",
        "listCreated",
        "listUpdated",
        "listDeleted",
        "folderCreated",
        "folderUpdated",
        "folderDeleted",
        "spaceCreated",
        "spaceUpdated",
        "spaceDeleted",
        "goalCreated",
        "goalUpdated",
        "goalDeleted",
        "keyResultCreated",
        "keyResultUpdated",
        "keyResultDeleted",
      ],
    }),
  });

  const data = await resp.json();
  console.log({ responseFromClickUp: data });
}
