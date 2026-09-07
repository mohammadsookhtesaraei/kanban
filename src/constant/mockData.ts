import type { BoardType } from '@/types/board';

export const boardsData: BoardType[] = [
  {
    id: 'board-1',
    color: 'blue',
    description: 'Track and manage the current sprint tasks',
    title: 'Sprint-task',
    lists: [
      {
        id: 'list-1',
        title: '🔜 To Do',
        items: [
          {
            id: 'item-1',
            title: 'Review project docs',
            description:
              'Read the initial documentation and identify requirements',
            dueDate: '2026-09-10',
          },
          {
            id: 'item-2',
            title: 'Design modal component',
            description: 'Build a reusable modal component with dynamic props',
            dueDate: '2026-09-12',
          },
          {
            id: 'item-3',
            title: 'Add Tailwind to project',
            description:
              'Install and configure Tailwind CSS, set up config file',
            dueDate: '2026-09-09',
          },
          {
            id: 'item-4',
            title: 'Design login page',
            description: 'Implement login page UI based on Figma file',
            dueDate: '2026-09-14',
          },
        ],
      },
      {
        id: 'list-2',
        title: '🔨 Doing',
        items: [
          {
            id: 'item-5',
            title: 'Set up backend',
            description:
              'Build Node.js server and connect to Postgres database',
            dueDate: '2026-09-11',
          },
          {
            id: 'item-6',
            title: 'Implement authentication',
            description: 'Implement JWT for user login and signup',
            dueDate: '2026-09-13',
          },
        ],
      },
      {
        id: 'list-3',
        title: '🎉 Done',
        items: [
          {
            id: 'item-7',
            title: 'Set up git repository',
            description: 'Create GitHub repo and configure main branches',
            dueDate: '2026-09-05',
          },
        ],
      },
    ],
  },
  {
    id: 'board-2',
    color: 'green',
    description: 'Manage UI design tasks for the mobile application',
    title: 'Mobile-UI-Design',
    lists: [
      {
        id: 'list-4',
        title: '🔜 To Do',
        items: [
          {
            id: 'item-8',
            title: 'Design splash screen',
            description: 'Design entry animation with brand logo',
            dueDate: '2026-09-15',
          },
          {
            id: 'item-9',
            title: 'Design user dashboard',
            description:
              'Layout widgets and statistics charts on the main screen',
            dueDate: '2026-09-18',
          },
        ],
      },
      {
        id: 'list-5',
        title: '🔨 Doing',
        items: [
          {
            id: 'item-10',
            title: 'Design color system',
            description: 'Define color palette and light/dark theme variables',
            dueDate: '2026-09-16',
          },
        ],
      },
      {
        id: 'list-6',
        title: '🎉 Done',
        items: [
          {
            id: 'item-11',
            title: 'Research competitors',
            description:
              'Review three similar apps and extract useful insights',
            dueDate: '2026-09-03',
          },
          {
            id: 'item-12',
            title: 'Create initial wireframes',
            description: 'Sketch wireframes of main screens in Figma',
            dueDate: '2026-09-06',
          },
        ],
      },
    ],
  },
  {
    id: 'board-3',
    color: 'orange',
    description: 'Plan and execute a three-month content marketing campaign',
    title: 'Marketing-Campaign',
    lists: [
      {
        id: 'list-7',
        title: '🔜 To Do',
        items: [
          {
            id: 'item-13',
            title: 'Write content calendar',
            description: 'Schedule posts for social media channels',
            dueDate: '2026-09-20',
          },
          {
            id: 'item-14',
            title: 'Design ad banners',
            description: 'Design banners for Instagram and Google Ads campaign',
            dueDate: '2026-09-22',
          },
          {
            id: 'item-15',
            title: 'Coordinate with influencers',
            description:
              'Send collaboration proposals to three tech influencers',
            dueDate: '2026-09-19',
          },
        ],
      },
      {
        id: 'list-8',
        title: '🔨 Doing',
        items: [
          {
            id: 'item-16',
            title: 'Produce product intro video',
            description: 'Film and edit a short product introduction video',
            dueDate: '2026-09-21',
          },
        ],
      },
      {
        id: 'list-9',
        title: '🎉 Done',
        items: [
          {
            id: 'item-17',
            title: 'Define campaign goals',
            description: 'Set KPIs and target audience for the campaign',
            dueDate: '2026-09-01',
          },
        ],
      },
    ],
  },
];
