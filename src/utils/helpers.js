exports.trimmer = function (contentSnippet, content = '') {
  contentSnippet = contentSnippet.toString();
  const i = contentSnippet.indexOf('episodi:');
  const description =
    i === -1 ? contentSnippet : contentSnippet.substring(0, i - 12);
  // Show notes as HTML
  // const j = fullDescriptionHtml.indexOf('notes:</strong></p>');
  // const showNotes = fullDescriptionHtml.substring(j + 19);
  return {
    description: description,
    // descriptionHtml: descriptionHtml,
    // notesEpisodiHtml: notesEpisodiHtml,
    // capitolsRelacionatsHtml: capitolsRelacionatsHtml,
  };
};
