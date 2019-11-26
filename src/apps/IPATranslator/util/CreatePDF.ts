import { Result, Languages } from '../constants/Interfaces';
import jsPDF from 'jspdf';
import { Charis } from '../constants/fonts/CharisSIL-R-normal';

const createPDFFromResult = (language: Languages, result: Result) => {
  const pdf = new jsPDF();
  const footerY = 285;
  const maxY = footerY - 20;
  const maxLineLength = 70;
  const startX = 15;
  const startY = 20;
  const titleBottomMargin = 15;
  const ipaLineSpacing = 5;
  const fullLineSpacing = 15;

  pdf.addFileToVFS('Charis.ttf', Charis);
  pdf.addFont('Charis.ttf', 'Charis', 'normal');

  pdf.setFontSize(18);
  pdf.setFont('Helvetica', 'bold');
  pdf.text(`Open IPA - ${language} Language Transcription`, startX, startY);

  pdf.setFontSize(14);
  pdf.setFont('Helvetica', 'normal');
  pdf.text(`https://www.henryfellerhoff.com/ipa`, startX, footerY);

  pdf.setFontSize(14);
  let y = startY + titleBottomMargin;
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
      if (textLine.length > maxLineLength || ipaLine.length > maxLineLength) {
        pdf.setFont('Helvetica', 'bold');
        pdf.text(textLine, startX, y);
        pdf.setFont('Charis', 'normal');
        pdf.text(ipaLine, startX, y + ipaLineSpacing);
        y += fullLineSpacing;
        textLine = '';
        ipaLine = '';
      }
    });
    if (y >= maxY) {
      pdf.addPage();
      pdf.setFontSize(14);
      pdf.setFont('Helvetica', 'normal');
      pdf.text(`https://www.henryfellerhoff.com/ipa`, startX, footerY);
      y = startY;
    }

    if (textLine[0] === ' ') textLine = textLine.substring(1, textLine.length);
    if (ipaLine[0] === ' ') ipaLine = ipaLine.substring(1, ipaLine.length);
    pdf.setFont('Helvetica', 'bold');
    pdf.text(textLine, startX, y);
    pdf.setFont('Charis', 'normal');
    pdf.text(ipaLine, startX, y + ipaLineSpacing);
    console.log(textLine.length);
    y += fullLineSpacing;
  });
  pdf.save('Open-IPA.pdf');
};

export default createPDFFromResult;
