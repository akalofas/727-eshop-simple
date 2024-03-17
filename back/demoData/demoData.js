const initialUserRoles = [
  { role: "Admin" },
  { role: "Mod" },
  { role: "User" },
  { role: "Demo" },
  { role: "koukou" },
];

const initialTransGroupRole = [
  {
    name: "koukou",
    transGroup: "Group1",
    permissions: [{ name: "Admin", description: "Trans Group Admin" }],
  },
  {
    name: "roukou",
    transGroup: "Group1",
    permissions: [{ name: "Mod", description: "Trans Group Mod" }],
  },
  {
    name: "malakas",
    transGroup: "Group1",
    permissions: [{ name: "Editor", description: "Trans Group Editor" }],
  },
  { name: "Admin2", transGroup: "Group2" },
  { name: "Mod2", transGroup: "Group2" },
  { name: "User", transGroup: "Group2" },
  { name: "Admin3", transGroup: "Group3" },
  { name: "Mod3", transGroup: "Group3" },
  { name: "User", transGroup: "Group3" },
];

const initialDonorRoles = [
  {
    name: "Bronze",
    value: 10,
    transGroup: "Group1",
    permissions: [{ name: "Bronze", description: "Trans Group Bronze Donor" }],
  },
  { name: "Silver", value: 10, transGroup: "Group2" },
  { name: "Gold", value: 10, transGroup: "Group3" },
];

const initialTranslationGroups = [
  { name: "Group1" },
  { name: "Group2" },
  { name: "Group3" },
];

const initialUsersForDonorAndTransGroup = [
  { email: "transadmin1@test.gr", group: "Group1", role: "koukou" },
  { email: "transmod1@test.gr", group: "Group1", role: "roukou" },
  { email: "transmember1@test.gr", group: "Group1", role: "malakas" },
  { email: "transadmin2@test.gr", group: "Group2", role: "Admin2" },
  { email: "transmod2@test.gr", group: "Group2", role: "Mod2" },
  { email: "transmember2@test.gr", group: "Group2", role: "User" },
  { email: "transadmin3@test.gr", group: "Group3", role: "Admin3" },
  { email: "transmod3@test.gr", group: "Group3", role: "Mod3" },
  { email: "transmember3@test.gr", group: "Group3", role: "User" },
  { email: "donor1@test.gr", group: "Group1", role: "Bronze" },
  { email: "donor2@test.gr", group: "Group2", role: "Silver" },
  { email: "donor3@test.gr", group: "Group3", role: "Gold" },
];

const initialUsers = [
  { email: "admin@test.gr", password: "123456", roleName: "Admin" },
  { email: "mod@test.gr", password: "123456", roleName: "Mod" },
  { email: "user@test.gr", password: "123456", roleName: "User" },
  { email: "transadmin1@test.gr", password: "123456", roleName: "User" },
  { email: "transmember1@test.gr", password: "123456", roleName: "User" },
  { email: "transmod1@test.gr", password: "123456", roleName: "User" },
  { email: "transadmin2@test.gr", password: "123456", roleName: "User" },
  { email: "transmember2@test.gr", password: "123456", roleName: "User" },
  { email: "transmod2@test.gr", password: "123456", roleName: "User" },
  { email: "transadmin3@test.gr", password: "123456", roleName: "User" },
  { email: "transmember3@test.gr", password: "123456", roleName: "User" },
  { email: "transmod3@test.gr", password: "123456", roleName: "User" },
  { email: "donor1@test.gr", password: "123456", roleName: "User" },
  { email: "donor2@test.gr", password: "123456", roleName: "User" },
  { email: "donor3@test.gr", password: "123456", roleName: "User" },
];

const initialComics = [
  { title: "Comic Title", author: "Author Name", publishedDate: "2020-01-01" },
  {
    title: "Comic Title2",
    author: "Author Name2",
    publishedDate: "2021-01-01",
  },
  {
    title: "Comic Title3",
    author: "Author Name3",
    publishedDate: "2022-01-01",
  },
  {
    title: "Comic Title4",
    author: "Author Name4",
    publishedDate: "2023-01-01",
  },
  {
    title: "Comic Title5",
    author: "Author Name5",
    publishedDate: "2024-01-01",
  },
];

const initialThemeSettings = {
  isDefaultLight: true,
  settings: [
    {
      colors: [
        {
          light: [
            {
              main_color: "#1f2937",
              main_bg_color: "#f3f4f6",
              nav_color: "#f3f4f6",
              nav_bg_color: "#6d28d9",
              a_color: "#646cff",
              a_hover_color: "#646cff",
              button_color: "#f3f4f6",
              button_bg_color: "#6d28d9",
              button_hover_color: "#f3f4f6",
              button_hover_bg_color: "#646cff",
            },
          ],
          dark: [
            {
              main_color: "#f3f4f6",
              main_bg_color: "#1f2937",
              nav_color: "#f3f4f6",
              nav_bg_color: "#6d28d9",
              a_color: "#6f28d9",
              a_hover_color: "#646cff",
              button_color: "#f3f4f6",
              button_bg_color: "#6d28d9",
              button_hover_color: "#f3f4f6",
              button_hover_bg_color: "#646cff",
            },
          ],
        },
      ],
      fonts: [
        {
          light: [
            {
              main_font: "Arial, sans-serif",
              nav_font: "Arial, sans-serif",
              button_font: "Arial, sans-serif",
            },
          ],
          dark: [
            {
              main_font: "Arial, sans-serif",
              nav_font: "Arial, sans-serif",
              button_font: "Arial, sans-serif",
            },
          ],
        },
      ],
      sizes: [
        {
          light: [
            {
              main_size: "16px",
              nav_size: "16px",
              button_size: "16px",
            },
          ],
          dark: [
            {
              main_size: "16px",
              nav_size: "16px",
              button_size: "16px",
            },
          ],
        },
      ],
      borders: [
        {
          light: [
            {
              main_border: "1px solid #000",
              nav_border: "1px solid #000",
              button_border: "1px solid #000",
            },
          ],
          dark: [
            {
              main_border: "1px solid #000",
              nav_border: "1px solid #000",
              button_border: "1px solid #000",
            },
          ],
        },
      ],
      shadows: [
        {
          light: {
            main_shadow: "1px 1px 1px #000",
            nav_shadow: "1px 1px 1px #000",
            button_shadow: "1px 1px 1px #000",
          },
          dark: {
            main_shadow: "1px 1px 1px #000",
            nav_shadow: "1px 1px 1px #000",
            button_shadow: "1px 1px 1px #000",
          },
        },
      ],
      transitions: [
        {
          light: [
            {
              main_transition: "all 0.3s ease",
              nav_transition: "all 0.3s ease",
              button_transition: "all 0.3s ease",
            },
          ],
          dark: [
            {
              main_transition: "all 0.3s ease",
              nav_transition: "all 0.3s ease",
              button_transition: "all 0.3s ease",
            },
          ],
        },
      ],
      animations: [
        {
          light: [
            {
              main_animation: "spin 4s linear infinite",
              nav_animation: "spin 4s linear infinite",
              button_animation: "spin 4s linear infinite",
            },
          ],
          dark: [
            {
              main_animation: "spin 4s linear infinite",
              nav_animation: "spin 4s linear infinite",
              button_animation: "spin 4s linear infinite",
            },
          ],
        },
      ],
      other: [
        {
          light: [
            {
              main_other: "other",
              nav_other: "other",
              button_other: "other",
            },
          ],
          dark: [
            {
              main_other: "other",
              nav_other: "other",
              button_other: "other",
            },
          ],
        },
      ],
    },
  ],
};

module.exports = {
  initialUserRoles,
  initialUsers,
  initialComics,
  initialTransGroupRole,
  initialDonorRoles,
  initialTranslationGroups,
  initialUsersForDonorAndTransGroup,
  initialThemeSettings,
};
