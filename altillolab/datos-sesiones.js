/* =====================================================================
   LABORATORIO ALTILLO · contenido de cada sesión
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para subir material.
   Cada sesión tiene:
     videos  -> grabaciones (YouTube oculto, Vimeo o Drive): {t, url, dur}
     pdfs    -> documentos:                                  {t, url, pags}
     textos  -> apuntes escritos aquí mismo:                 {t, html}
     apps    -> apps web (las del lab viven en apps/):         {t, url, desc}
     fisico  -> material que se entrega en clase:            {t, desc, pdf}
   Si un "url" está vacío, la página lo muestra como "pendiente de subir".
   TODO lo que hay ahora es de EJEMPLO.
   ===================================================================== */
window.ALTILLO_LAB = {
  bloques: {
    deseo:   { nombre: 'Deseo',            color: '#F5B700', tinta: '#17140f', figura: 'figura-cerdita.webp' },
    arraigo: { nombre: 'Arraigo',          color: '#E8694F', tinta: '#17140f', figura: 'figura-burro.webp' },
    contra:  { nombre: 'Contradicción',    color: '#d4261a', tinta: '#ede5d0', figura: 'figura-mono.webp' },
    cierre:  { nombre: 'Ensayo y muestra', color: '#17140f', tinta: '#ede5d0', figura: 'figura-sillon.webp' }
  },
  sesiones: [
    { n: 1, bloque: 'deseo', fecha: '2027-01-13', titulo: 'Qué deseas cuando escribes',
      resumen: 'Arrancamos escuchando canciones que desean fuerte y buscando qué quieres decir tú antes de buscar cómo.',
      videos: [{ t: 'Grabación de la sesión 1', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Playlist comentada: canciones que desean', url: '', pags: 4 }],
      textos: [{ t: 'Apuntes', html: '<p>Una canción empieza por un deseo concreto, no por un tema. Esta semana: escribe tres frases que empiecen por <em>quiero</em> y que te dé vergüenza leer en voz alta.</p>' }],
      apps:   [{ t: 'Coetus', url: 'apps/coetus/index.html?desde=sesion.html%23s1', desc: 'Saca de oído la melodía de una canción que desees y apúntala en el minuto exacto.' }, { t: 'Música con la cámara', url: 'apps/camara/index.html?desde=sesion.html%23s1', desc: 'En obras: muévete delante del móvil y que tu cuerpo suene.' }],
      fisico: [{ t: 'Cuaderno del altillo', desc: 'Lo repartimos en la primera clase.', pdf: '' }] },

    { n: 2, bloque: 'deseo', fecha: '2027-01-20', titulo: 'Melodía y motivo',
      resumen: 'Del tarareo a la melodía: cómo un motivo pequeño sostiene una canción entera.',
      videos: [{ t: 'Grabación de la sesión 2', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Plantilla de maqueta para tu DAW', url: '', pags: 2 }],
      textos: [{ t: 'Ejercicio', html: '<p>Coge una de tus frases de <em>quiero</em> y cántala de tres maneras distintas. Quédate con la que te incomode menos.</p>' }],
      apps:   [{ t: 'Coetus', url: 'apps/coetus/index.html?desde=sesion.html%23s2', desc: 'Marca el motivo que sostiene una canción y escríbelo con notación de verdad.' }, { t: 'Armonía con conejo', url: 'apps/armonia/index.html?desde=sesion.html%23s2', desc: 'Nivel medio: tensión y resolución, el acorde que se hace esperar.' }],
      fisico: [] },

    { n: 3, bloque: 'deseo', fecha: '2027-01-27', titulo: 'Grabar la primera maqueta',
      resumen: 'Cerramos el primer concepto con una maqueta grabada, aunque sea con el móvil.',
      videos: [{ t: 'Grabación de la sesión 3', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Stems de ejemplo (carpeta)', url: '', pags: null }],
      textos: [],
      apps:   [{ t: 'Revisión de canciones', url: 'apps/revision/index.html?desde=sesion.html%23s3', desc: 'Sube tu primera maqueta como v1 y apunta lo que quieres cambiar.' }],
      fisico: [{ t: 'Hoja de escucha', desc: 'Para escuchar las maquetas del grupo con oído de productora.', pdf: '' }] },

    { n: 4, bloque: 'arraigo', fecha: '2027-02-03', titulo: 'Palos y compases',
      resumen: 'Abrimos el arraigo: palos, compases y cantes como materia prima para canciones de hoy.',
      videos: [{ t: 'Grabación de la sesión 4', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Cancionero de raíz', url: '', pags: 18 }],
      textos: [{ t: 'Apuntes', html: '<p>Un compás de doce no es una fórmula matemática: es una manera de respirar. Escucha, palmea y luego escribe.</p>' }],
      apps:   [{ t: 'Coetus', url: 'apps/coetus/index.html?desde=sesion.html%23s4', desc: 'Saca de oído ritmos y melodías de músicas de raíz.' }, { t: 'Armonía con conejo', url: 'apps/armonia/index.html?desde=sesion.html%23s4', desc: 'Nivel básico: círculo de quintas, mayor y menor y sus acordes.' }],
      fisico: [{ t: 'Cancionero de raíz impreso', desc: 'Encuadernado, para anotar a lápiz.', pdf: '' }] },

    { n: 5, bloque: 'arraigo', fecha: '2027-02-10', titulo: 'Ritmo, sampleo y percusión',
      resumen: 'Grabamos sonidos de casa y de la calle y los convertimos en ritmo.',
      videos: [{ t: 'Grabación de la sesión 5', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Samples de campo (carpeta)', url: '', pags: null }],
      textos: [],
      apps:   [{ t: 'Armonía con conejo', url: 'apps/armonia/index.html?desde=sesion.html%23s5', desc: 'Nivel avanzado: frigia dominante y cadencia andaluza.' }],
      fisico: [] },

    { n: 6, bloque: 'arraigo', fecha: '2027-02-17', titulo: 'La voz que viene de atrás',
      resumen: 'Cante, copla y voz: qué heredas cuando cantas y qué haces con ello.',
      videos: [{ t: 'Grabación de la sesión 6', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Referencias de cante', url: '', pags: 6 }],
      textos: [],
      apps:   [{ t: 'Revisión de canciones', url: 'apps/revision/index.html?desde=sesion.html%23s6', desc: 'Sube la versión nueva y trae los pendientes de la anterior.' }],
      fisico: [{ t: 'Letras para intervenir', desc: 'Coplas tradicionales para reescribir a tu manera.', pdf: '' }] },

    { n: 7, bloque: 'contra', fecha: '2027-02-24', titulo: 'Contraste entre letra y música',
      resumen: 'Cuando la letra dice una cosa y la música otra, pasa algo interesante.',
      videos: [{ t: 'Grabación de la sesión 7', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Ejercicios de contradicción', url: '', pags: 3 }],
      textos: [],
      apps:   [{ t: 'Armonía con conejo', url: 'apps/armonia/index.html?desde=sesion.html%23s7', desc: 'Nivel avanzado: préstamo modal, la luz de la mayor con una nube encima.' }],
      fisico: [] },

    { n: 8, bloque: 'contra', fecha: '2027-03-03', titulo: 'Arreglo y tensión',
      resumen: 'Cómo crear y soltar tensión con el arreglo.',
      videos: [{ t: 'Grabación de la sesión 8', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Proyecto de arreglo', url: '', pags: null }],
      textos: [],
      apps:   [{ t: 'Coetus', url: 'apps/coetus/index.html?desde=sesion.html%23s8', desc: 'Busca el choque: marca dónde la letra dice una cosa y la música otra.' }],
      fisico: [] },

    { n: 9, bloque: 'contra', fecha: '2027-03-10', titulo: 'Mezcla para no ingenieros',
      resumen: 'Lo justo de mezcla para que tu tema suene a tema.',
      videos: [{ t: 'Grabación de la sesión 9', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Plantilla de mezcla', url: '', pags: null }],
      textos: [],
      apps:   [{ t: 'Revisión de canciones', url: 'apps/revision/index.html?desde=sesion.html%23s9', desc: 'Revisa tu canción versión a versión antes del ensayo.' }],
      fisico: [{ t: 'Chuleta de mezcla', desc: 'Una hoja para tener al lado del ordenador.', pdf: '' }] },

    { n: 10, bloque: 'cierre', fecha: '2027-03-17', titulo: 'Ensayo general',
      resumen: 'Pasamos la muestra de principio a fin.',
      videos: [{ t: 'Grabación del ensayo', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Hoja de ruta de la muestra', url: '', pags: 2 }],
      textos: [],
      apps:   [{ t: 'Revisión de canciones', url: 'apps/revision/index.html?desde=sesion.html%23s10', desc: 'Los últimos apuntes antes de la muestra.' }],
      fisico: [{ t: 'Setlist y escaleta', desc: 'La llevas en el bolsillo la noche de la muestra.', pdf: '' }] },

    { n: 11, bloque: 'cierre', fecha: '2027-03-24', fechaPorConfirmar: true, titulo: 'Muestra final',
      resumen: 'La noche de enseñar lo que ha salido del altillo. Chulona Mía o Bella Bestia, por confirmar.',
      videos: [{ t: 'La muestra entera', url: '', dur: '' }],
      pdfs:   [{ t: 'Fotos de la muestra (carpeta)', url: '', pags: null }],
      textos: [],
      apps:   [],
      fisico: [] }
  ]
};
