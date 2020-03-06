import LeagueBoard from '@/views/LeagueBoard/LeagueBoard.vue';

const leagueBoardRoutes = [
    {
        path: '/:leagueId/board',
        component: LeagueBoard,
        name: 'board',
    },
];

export default leagueBoardRoutes;

