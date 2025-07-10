const Candidate = require('../models/candidate.model');
const cloudinary = require('../utils/cloudinary');

exports.createCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid email');
    if (!/^[0-9]{10}$/.test(phone)) throw new Error('Invalid phone number');

    let resumeUrl = '';
    if (req.file) {
      if (!req.file.mimetype.includes('pdf')) throw new Error('Resume must be a PDF');
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'resumes' });
      resumeUrl = result.secure_url;
    }

    const candidate = new Candidate({
      name, email, phone, jobTitle, resumeUrl, referredBy: req.user.id
    });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().populate('referredBy', 'name email');
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['Pending', 'Reviewed', 'Hired'];
    if (!allowed.includes(status)) throw new Error('Invalid status');

    const candidate = await Candidate.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Candidate deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 