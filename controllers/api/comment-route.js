// const router = require('express').Router();
// const {Comment } = require('../../Models');
// const withAuth = require('../../utils/auth.js')


// // Route to get all comments
// router.get('/', async (req, res) => {
//     try {
//       const commentData = await Comment.findAll();
//       console.log("Comments fetched successfully:", commentData);
//       res.status(200).json(commentData);
//     } catch (err) {
//       console.error("Error occurred while fetching comments:", err);
//       res.status(500).json(err);
//     }
//   });



// // Route for creating a new comment associated with a snack ID 
// router.post('/create', withAuth, async (req, res) => {
//     try {
//       const commentData = await Comment.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(commentData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });



// // Route for deleting a comment by ID
// router.delete('/:id', async (req, res) => {
//   try {
//       const commentId = req.params.id;
//       // Check if the comment exists
//       const comment = await Comment.findByPk(commentId);
//       if (!comment) {
//           return res.status(404).json({ error: 'Comment not found' });
//       }

//       // Check if the current user is authorized to delete the comment
//       // For example, you might want to check if the comment belongs to the current user

//       // Delete the comment
//       await Comment.destroy({
//           where: {
//               id: commentId
//           }
//       });

//       res.status(200).json({ message: 'Comment deleted successfully' });
//   } catch (err) {
//       console.error("Error occurred while deleting comment:", err);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });




  // module.exports = router;