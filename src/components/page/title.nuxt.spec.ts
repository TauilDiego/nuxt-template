// @vitest-environment nuxt
import { describe, expect, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { PageTitle } from "#components";

describe("title", () => {
  test("component render provider title", async () => {
    const title = "botãozinho";
    const titleComponent = await mountSuspended(PageTitle, {
      props: {
        title,
      },
    });

    expect(titleComponent.html()).toContain(title);
  });
});
