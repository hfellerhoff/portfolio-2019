import { Result, Languages } from '../constants/Interfaces';
import jsPDF from 'jspdf';
import { Charis } from '../constants/fonts/CharisSIL-R-normal';

const createPDFFromResult = (language: Languages, result: Result) => {
  const pdf = new jsPDF();

  pdf.addFileToVFS('Charis.ttf', Charis);
  pdf.addFont('Charis.ttf', 'Charis', 'normal');

  pdf.setFontSize(18);
  pdf.setFont('Helvetica', 'bold');
  pdf.text(`Open IPA - ${language} Language Transcription`, 15, 20);
  pdf.setFontSize(14);
  let y = 35;

  result.lines.forEach(line => {
    let textLine = '';
    let ipaLine = '';
    line.words.forEach(word => {
      word.syllables.forEach(syllable => {
        if (syllable.text !== '\n') {
          textLine += syllable.text;
          ipaLine += syllable.ipa;
        }
      });
    });
    if (y >= 280) {
      pdf.addPage();
      y = 20;
    }
    pdf.setFont('Helvetica', 'bold');
    pdf.text(textLine, 15, y);
    pdf.setFont('Charis', 'normal');
    pdf.text(ipaLine, 15, y + 5);
    y += 15;
  });
  pdf.save('Open-IPA.pdf');
};

export default createPDFFromResult;
