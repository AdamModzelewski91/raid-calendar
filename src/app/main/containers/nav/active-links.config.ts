export const activeLinksMaster= [
  {
    name: "Dashboard",
    visible: true,
    path: "dashboard",
    expanded: false,
    active: true,
  },
  {
    name: "Progress",
    visible: true,
    path: "progress",
    expanded: false,
    active: false,
    submenus: [
      {
        name: 'Individual',
        path: 'individual',
        visible: true,
      },
      {
        name: 'Global',
        path: 'global',
        visible: true,
      },
    ]
  },
  {
    name: "Raids",
    visible: true,
    path: "raids",
    expanded: false,
    active: true,
  },
  {
    name: "Administration",
    visible: true,
    path: "administration",
    expanded: true,
    active: false,
    submenus: [
      {
        name: 'Raid settings',
        path: 'raid-settings',
        visible: true,
      },
      {
        name: 'Game specification',
        path: 'game-specification',
        visible: true,
      },
      {
        name: 'Member list',
        path: 'member-list',
        visible: true,
      },
    ]
  }
]

export const activeLinksMember= [
  {
    name: "Dashboard",
    visible: true,
    path: "dashboard",
    expanded: false,
    active: true,
  },
  {
    name: "Progress",
    visible: true,
    path: "progress",
    expanded: false,
    active: false,
    submenus: [
      {
        name: 'Individual',
        path: 'individual',
        visible: true,
      },
      {
        name: 'Global',
        path: 'global',
        visible: true,
      },
    ]
  },
  {
    name: "Raids",
    visible: true,
    path: "raids",
    expanded: false,
    active: true,
  },
  {
    name: "Administration",
    visible: false,
    path: "administration",
    expanded: true,
    active: false,
    submenus: [
      {
        name: 'Raid settings',
        path: 'raid-settings',
        visible: true,
      },
      {
        name: 'Game specification',
        path: 'game-specification',
        visible: true,
      },
      {
        name: 'Member list',
        path: 'member-list',
        visible: true,
      },
    ]
  }
]

