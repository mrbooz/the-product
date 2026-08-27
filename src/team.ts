// Who is building this. One entry per person, in join order — the page reads
// as a record of who turned up, so new people go at the end.

export interface Member {
  name: string;
  role: string;
  /** What they are actually working on right now, in their own words. */
  on: string;
}

export const TEAM: Member[] = [
  { name: "Sofia Reyes", role: "Product", on: "acceptance criteria for the first spin" },
  { name: "Marcus Chen", role: "Engineering Manager", on: "keeping week one to one ticket" },
  { name: "Nadia Okafor", role: "Senior Engineer", on: "reviewing every diff that opens" },
  { name: "theo", role: "Design", on: "the one-song morning card" },
  { name: "Ben Tran", role: "Data", on: "the retention autopsy" },
  { name: "Sam", role: "Software Engineer I", on: "this page" },
];

/** Render the team into `mount`. Returns the list element so tests can read it. */
export function renderTeam(mount: HTMLElement): HTMLUListElement {
  const list = document.createElement("ul");
  list.className = "team-list";
  for (const member of TEAM) {
    const row = document.createElement("li");
    const name = document.createElement("span");
    name.className = "team-name";
    name.textContent = member.name;
    const role = document.createElement("span");
    role.className = "team-role";
    role.textContent = member.role;
    row.append(name, role);
    row.title = member.on;
    list.append(row);
  }
  mount.append(list);
  return list;
}
