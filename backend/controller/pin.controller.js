import Pin from '../models/pin.model.js';

export const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const LIMIT = 15;
  const pins = await Pin.find()
    .limit(LIMIT)
    .skip(LIMIT * pageNumber);

  const hasNextPage = pins.length === LIMIT;

  res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};
