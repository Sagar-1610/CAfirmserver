const express = require('express');
const { fetchServices, AddAdvisor, FetchAdvisors, AddService, AddPracticeArea, fetchPracticeAreas } = require('../controllers/userControllers');
const router = express.Router();

router.get('/getservices', fetchServices);
router.post('/addadvisor',AddAdvisor)
router.get('/fetchadvisors',FetchAdvisors)
router.post('/addservice',AddService)
router.get('/fetchService',fetchServices)
router.post('/addpracticearea',AddPracticeArea)
router.get('/fetchpracticearea',fetchPracticeAreas)

module.exports = router;
