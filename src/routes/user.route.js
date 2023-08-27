const express = require("express");
const verifyToken = require("../middlewares/verify_token");
const userController = require("../controllers/user.controller");
const router = express.Router();
const crypto = require("crypto");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//router.get('/deletuser', userController.deletuser);
// register a user
router.post("/register", userController.register);
router.post("/googleregister", userController.googleregister);
router.post("/googleLogin", userController.googleLogin);
// login a user
router.post("/login", userController.login);
router.post("/check", userController.checkUser);
router.get("/:username/userPageInfo", userController.userPageInfo);
router.get("/userinfo", verifyToken, userController.getUser);
// update a user type
router.post("/updateusertype", verifyToken, userController.updateusertype);
// update a user type
router.get("/activated-tabs", verifyToken, userController.getActivatedTabs);
router.get(
  "/:username/activated-tabs",
  userController.getActivatedTabsFromUsername
);
router.patch(
  "/activated-tabs",
  verifyToken,
  userController.updateActivatedTabs
);
// check for username availablitity for clooble
router.get(
  "/searchcloobleusername",
  verifyToken,
  userController.searchcloobleusername
);
//create a clooble link
router.post(
  "/createclooblelink",
  verifyToken,
  userController.createclooblelink
);
//list of trending artists (buyers / Creators ) with filters
router.get(
  "/gettrendingartists",
  verifyToken,
  userController.gettrendingartists
);
//add profile info
router.post("/userprofileinfo", verifyToken, userController.userprofileinfo);
// get link in bio profile data
router.get("/userprofileinfo", verifyToken, userController.getuserprofileinfo);
// create-new-links for link in bio
router.post("/createlinks", verifyToken, userController.createlinks);
//get-already-created-links
router.get("/getuserlinks", verifyToken, userController.getuserlinks);
// to enable/disable a link
router.post(
  "/enabledisablelink",
  verifyToken,
  userController.enabledisablelink
);
// delete a record
router.delete("/deletelink", verifyToken, userController.deletelink);
// star / highlight a record
router.post("/highlightrecord", verifyToken, userController.highlightrecord);
// get user metrics (analytics)
router.get(
  "/getlinkinbioanalytics",
  verifyToken,
  userController.getlinkinbioanalytics
);

// new matrice based apis on Oct 31, 2022
router.get("/getNfts", userController.getNfts);

// Rushikesh Parte APIS
// new link update for icon image apis

router.patch(
  "/update_icon_image",
  verifyToken,
  userController.Edit_LinkIcon_Image
);
router.patch(
  "/default_icon_image",
  verifyToken,
  userController.Default_LinkIcon_Image
);
router.patch("/update_link_array", verifyToken, userController.UpdateLinkArray);
//websites view counts
router.get(
  "/clooble_link_mobile_view",
  verifyToken,
  userController.Clooble_Link_Moblie_view
);
router.get(
  "/clooble_link_desktop_view",
  verifyToken,
  userController.Clooble_Link_Desktop_view
);

router.get(
  "/nft_link_total_view",
  verifyToken,
  userController.Nft_Link_Total_view
);

router.get(
  "/instagram_link_clicks",
  verifyToken,
  userController.Instagram_Link_Clicks
);
router.get(
  "/twitter_link_clicks",
  verifyToken,
  userController.Twitter_Link_Clicks
);
router.get(
  "/discord_link_clicks",
  verifyToken,
  userController.Discord_Link_Clicks
);
router.get(
  "/linkedin_link_clicks",
  verifyToken,
  userController.Linkedin_Link_Clicks
);
router.get(
  "/spotify_link_clicks",
  verifyToken,
  userController.Spotify_Link_Clicks
);

router.post(
  "/website_link_clicks",
  verifyToken,
  userController.Website_Link_Clicks
);

router.get("/all_views", verifyToken, userController.All_Views);

// NFT add routes
router.post("/add_nft", verifyToken, userController.NFTPost);
// router.post(
//   "/upload-nft-image",
//   verifyToken,
//   // upload.single("nftImage"),
//   userController.uploadNFTImage
// );
router.patch("/update_nft:nftId", verifyToken, userController.NFTUpdateImg);
router.delete("/delete_nft", verifyToken, userController.NFTDelete);
router.get("/get_nft", verifyToken, userController.NFTgetNormal);

// nftport-based apis on Nov 1, 2022
// router.get('/getCreatorBasedData', userController.getCreatorBasedData);
router.get("/salesData", verifyToken, userController.salesData);
router.get("/buyData", verifyToken, userController.buyData);
router.get("/nftsOwned", verifyToken, userController.nftsOwned);
router.get("/nftsCreated", verifyToken, userController.nftsCreated);
router.post("/autosave_profile", verifyToken, userController.autosave_profile);
router.post("/autosave_links", verifyToken, userController.autosave_links);
// get a user type
router.get("/usertype", verifyToken, userController.usertype);
router.post(
  "/create_social_links",
  verifyToken,
  userController.create_social_links
);
router.get("/get_social_links", verifyToken, userController.get_social_links);
router.get("/get_nfts", userController.get_nfts);

// new apis on 23rd November, 2022
router.post("/add_a_metrice", userController.add_a_metrice);
router.delete(
  "/remove_a_metrice",
  verifyToken,
  userController.remove_a_metrice
);
router.get("/all_metrices", verifyToken, userController.all_metrices);
router.post(
  "/update_user_profile",
  verifyToken,
  userController.update_user_profile
);

router.post("/sendotp", userController.sendotp);
router.post("/verifyotp", userController.verifyotp);
router.post("/resetpassword", userController.resetpassword);
router.post("/send-verification", userController.sendVerification);
router.post("/verify-email", userController.verifyEmail);

router.post(
  "/getclooblelinkstatus",
  verifyToken,
  userController.getclooblelinkstatus
);

router.post(
  "/getuserdetailsbasedonusrname",
  userController.getuserdetailsbasedonusrname
);
router.post("/addremovematrics", verifyToken, userController.addremovematrics);
router.post("/getmatricslist", verifyToken, userController.getmatricslist);
router.post("/updatematrics", verifyToken, userController.updatematrics);
router.post(
  "/updatefftcontract",
  verifyToken,
  userController.updateNftContract
);
router.post("/matricsupdate", verifyToken, userController.matricsupdate);

// new endpoints on Dec 21, 2022
router.post(
  "/add_walletaddress",
  verifyToken,
  userController.add_walletaddress
);
router.get(
  "/:username/userprofileinfo",
  userController.profileinfo_by_username
);
router.get("/:username/getuserlinks", userController.userlinks_by_username);
router.get("/:username/get_nft", userController.NFTget);
router.get(
  "/:username/get_social_links",
  userController.sociallinks_by_username
);
router.get("/:username/nftsCreated", userController.nftsCreated_by_username);
router.get("/:username/salesData", userController.salesData_by_username);
router.get("/:username/nftsOwned", userController.nftsOwned_by_username);
router.get("/:username/buyData", userController.buyData_by_username);

router.post(
  "/:username/getmatricslist",
  userController.getmatricslist_by_username
);

router.post("/getnftgo", verifyToken, userController.getnftgo);
router.post(
  "/getnftsmart_contract",
  verifyToken,
  userController.getNftSmartContract
);

router.post("/removewallet", verifyToken, userController.removewallet);

module.exports = router;
