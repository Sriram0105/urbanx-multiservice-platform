// controllers/professionalController.js
const fs = require('fs');
const path = require('path');

const professionalsFile = path.join(__dirname, '../professional.json');

const readProfessionals = () => {
  const data = fs.readFileSync(professionalsFile);
  return JSON.parse(data);
};

const writeProfessionals = (data) => {
  fs.writeFileSync(professionalsFile, JSON.stringify(data, null, 2));
};

exports.registerProfessional = (req, res) => {
  try {
    const newPro = { ...req.body, id: Date.now() };
    const professionals = readProfessionals();
    professionals.push(newPro);
    writeProfessionals(professionals);
    res.status(201).json({ message: 'Professional registered', professional: newPro });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register professional.' });
  }
};

exports.getProfessionals = (req, res) => {
  try {
    const professionals = readProfessionals();
    res.json(professionals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read professionals.' });
  }
};

exports.getProfessionalById = (req, res) => {
  try {
    const professionals = readProfessionals();
    const professional = professionals.find(p => p.id === parseInt(req.params.id));
    if (!professional) {
      return res.status(404).json({ error: 'Professional not found.' });
    }
    res.json(professional);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read professional.' });
  }
};