import { notifyClickUpServerStarted } from "./notifyClickUpServerStarted.mjs";

export async function onApplicationBootstrap() {
  await notifyClickUpServerStarted();
}
