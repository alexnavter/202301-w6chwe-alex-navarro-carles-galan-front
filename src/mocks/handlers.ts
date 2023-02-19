import { rest } from "msw";

const robotsApiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.get(`${robotsApiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "63f1093fde936a22faaed2ae",
        name: "R2D2",
        url: "https://icons.iconarchive.com/icons/artua/star-wars/256/R2D2-icon.png",
        specs: {
          speed: 7,
          endurance: 8,
          creationDate: "1990-03-28T00:00:00.000+00:00",
        },
      })
    );
  }),
];

export default handlers;
