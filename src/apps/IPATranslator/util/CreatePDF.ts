import { Result, Languages } from '../constants/Interfaces';
import jsPDF from 'jspdf';
import { Charis } from '../constants/fonts/CharisSIL-R-normal';

const createPDFFromResult = (language: Languages, result: Result) => {
  const pdf = new jsPDF();
  const footerX = 285;

  pdf.addFileToVFS('Charis.ttf', Charis);
  pdf.addFont('Charis.ttf', 'Charis', 'normal');

  pdf.setFontSize(18);
  pdf.setFont('Helvetica', 'bold');
  pdf.text(`Open IPA - ${language} Language Transcription`, 15, 20);

  pdf.setFontSize(14);
  pdf.setFont('Helvetica', 'normal');
  pdf.text(`https://www.henryfellerhoff.com/ipa`, 15, footerX);

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
      if (textLine.length > 70 || ipaLine.length > 70) {
        pdf.setFont('Helvetica', 'bold');
        pdf.text(textLine, 15, y);
        pdf.setFont('Charis', 'normal');
        pdf.text(ipaLine, 15, y + 5);
        y += 15;
        textLine = '';
        ipaLine = '';
      }
    });
    if (y >= footerX - 20) {
      pdf.addPage();
      pdf.setFontSize(14);
      pdf.setFont('Helvetica', 'normal');
      pdf.text(`https://www.henryfellerhoff.com/ipa`, 15, footerX);
      y = 20;
    }

    if (textLine[0] === ' ') textLine = textLine.substring(1, textLine.length);
    if (ipaLine[0] === ' ') ipaLine = ipaLine.substring(1, ipaLine.length);
    pdf.setFont('Helvetica', 'bold');
    pdf.text(textLine, 15, y);
    pdf.setFont('Charis', 'normal');
    pdf.text(ipaLine, 15, y + 5);
    console.log(textLine.length);
    y += 15;
  });
  pdf.save('Open-IPA.pdf');
};

export default createPDFFromResult;
