/* =====================================================================
   LABORATORIO ALTILLO · contenido de cada sesión
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para subir material.
   Cada sesión tiene:
     videos  -> grabaciones (YouTube oculto, Vimeo o Drive): {t, url, dur}
     pdfs    -> documentos:                                  {t, url, pags}
     textos  -> apuntes escritos aquí mismo:                 {t, html}
     fisico  -> material que se entrega en clase:            {t, desc, pdf}
   Las apps NO van por sesión: están en "herramientas" (al final), un cajón
   fijo que se ve abierto durante todo el curso, en la landing y en cada sesión.
     herramientas -> {t, url, desc, para, estado}  (estado: '' | 'En obras' | 'Próximamente')
   Si un "url" está vacío, la página lo muestra como "pendiente de subir".
   El contenido de las sesiones es de EJEMPLO; las herramientas son las de verdad.
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
      fisico: [{ t: 'Cuaderno del altillo', desc: 'Lo repartimos en la primera clase.', pdf: '' }] },

    { n: 2, bloque: 'deseo', fecha: '2027-01-20', titulo: 'Melodía y motivo',
      resumen: 'Del tarareo a la melodía: cómo un motivo pequeño sostiene una canción entera.',
      videos: [{ t: 'Grabación de la sesión 2', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Plantilla de maqueta para tu DAW', url: '', pags: 2 }],
      textos: [{ t: 'Ejercicio', html: '<p>Coge una de tus frases de <em>quiero</em> y cántala de tres maneras distintas. Quédate con la que te incomode menos.</p>' }],
      fisico: [] },

    { n: 3, bloque: 'deseo', fecha: '2027-01-27', titulo: 'Grabar la primera maqueta',
      resumen: 'Cerramos el primer concepto con una maqueta grabada, aunque sea con el móvil.',
      videos: [{ t: 'Grabación de la sesión 3', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Stems de ejemplo (carpeta)', url: '', pags: null }],
      textos: [],
      fisico: [{ t: 'Hoja de escucha', desc: 'Para escuchar las maquetas del grupo con oído de productora.', pdf: '' }] },

    { n: 4, bloque: 'arraigo', fecha: '2027-02-03', titulo: 'Palos y compases',
      resumen: 'Abrimos el arraigo: palos, compases y cantes como materia prima para canciones de hoy.',
      videos: [{ t: 'Grabación de la sesión 4', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Cancionero de raíz', url: '', pags: 18 }],
      textos: [{ t: 'Apuntes', html: '<p>Un compás de doce no es una fórmula matemática: es una manera de respirar. Escucha, palmea y luego escribe.</p>' }],
      fisico: [{ t: 'Cancionero de raíz impreso', desc: 'Encuadernado, para anotar a lápiz.', pdf: '' }] },

    { n: 5, bloque: 'arraigo', fecha: '2027-02-10', titulo: 'Ritmo, sampleo y percusión',
      resumen: 'Grabamos sonidos de casa y de la calle y los convertimos en ritmo.',
      videos: [{ t: 'Grabación de la sesión 5', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Samples de campo (carpeta)', url: '', pags: null }],
      textos: [],
      fisico: [] },

    { n: 6, bloque: 'arraigo', fecha: '2027-02-17', titulo: 'La voz que viene de atrás',
      resumen: 'Cante, copla y voz: qué heredas cuando cantas y qué haces con ello.',
      videos: [{ t: 'Grabación de la sesión 6', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Referencias de cante', url: '', pags: 6 }],
      textos: [],
      fisico: [{ t: 'Letras para intervenir', desc: 'Coplas tradicionales para reescribir a tu manera.', pdf: '' }] },

    { n: 7, bloque: 'contra', fecha: '2027-02-24', titulo: 'Contraste entre letra y música',
      resumen: 'Cuando la letra dice una cosa y la música otra, pasa algo interesante.',
      videos: [{ t: 'Grabación de la sesión 7', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Ejercicios de contradicción', url: '', pags: 3 }],
      textos: [],
      fisico: [] },

    { n: 8, bloque: 'contra', fecha: '2027-03-03', titulo: 'Arreglo y tensión',
      resumen: 'Cómo crear y soltar tensión con el arreglo.',
      videos: [{ t: 'Grabación de la sesión 8', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Proyecto de arreglo', url: '', pags: null }],
      textos: [],
      fisico: [] },

    { n: 9, bloque: 'contra', fecha: '2027-03-10', titulo: 'Mezcla para no ingenieros',
      resumen: 'Lo justo de mezcla para que tu tema suene a tema.',
      videos: [{ t: 'Grabación de la sesión 9', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Plantilla de mezcla', url: '', pags: null }],
      textos: [],
      fisico: [{ t: 'Chuleta de mezcla', desc: 'Una hoja para tener al lado del ordenador.', pdf: '' }] },

    { n: 10, bloque: 'cierre', fecha: '2027-03-17', titulo: 'Ensayo general',
      resumen: 'Pasamos la muestra de principio a fin.',
      videos: [{ t: 'Grabación del ensayo', url: '', dur: '2 h' }],
      pdfs:   [{ t: 'Hoja de ruta de la muestra', url: '', pags: 2 }],
      textos: [],
      fisico: [{ t: 'Setlist y escaleta', desc: 'La llevas en el bolsillo la noche de la muestra.', pdf: '' }] },

    { n: 11, bloque: 'cierre', fecha: '2027-03-24', fechaPorConfirmar: true, titulo: 'Muestra final',
      resumen: 'La noche de enseñar lo que ha salido del altillo. Chulona Mía o Bella Bestia, por confirmar.',
      videos: [{ t: 'La muestra entera', url: '', dur: '' }],
      pdfs:   [{ t: 'Fotos de la muestra (carpeta)', url: '', pags: null }],
      textos: [],
      fisico: [] }
  ],
  herramientas: [
    { t: 'Coetus', url: 'apps/coetus/index.html', para: 'Todo el curso',
      desc: 'Saca de oído melodías, ritmos y armonías y apúntalos en el minuto exacto de la grabación, con notación de verdad.' },
    { t: 'Revisión de canciones', url: 'apps/revision/index.html', para: 'De la primera maqueta a la muestra',
      desc: 'Sube cada versión de tu canción, deja apuntes en el minuto que quieras cambiar y lleva los pendientes a la siguiente.' },
    { t: 'Armonía con conejo', url: 'apps/armonia/index.html', para: 'Básico, medio y avanzado',
      desc: 'Círculo de quintas, escalas y los acordes que salen de cada una, con un conejo que salta por las notas.' },
    { t: 'Biblioteca', url: '', estado: 'Próximamente', para: 'Para cuando no salga la letra',
      desc: 'Referencias literarias y un botón que saca un fragmento al azar para tirar del hilo.' },
    { t: 'Música con la cámara', url: 'apps/camara/index.html', estado: 'En obras', para: 'Para jugar con el cuerpo',
      desc: 'Te mueves delante del móvil y cada zona de la imagen suena. La está montando David.' }
  ]
};
