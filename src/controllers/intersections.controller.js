import { getIntersectionById } from "../services/intersections.service";

const getIntersection = async (req, res) => {
  try {
    const id = req.params.intersectionId;
    const intersection = await getIntersectionById(id);
    res.status(200).json(intersection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getIntersection };
