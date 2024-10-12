/**
 * Script for Sample
 *
 * @author Takuto Yanagida
 * @version 2024-10-12
 */

import 'klales/klales.min.css';
import { getSegments } from './../../jabun.ts';

document.addEventListener('DOMContentLoaded', () => {
	// const str = '参加希望の方は今すぐ登録してください。この会議では、グローバルなインタネット、Unicode、ソフトウェアの国際化およびローカリゼーション、OSおよびアプリケーションでのUnicodeのインプリメンテーション、フォント、テキスト表示、マルチ言語コンピューティングにおける業界の専門家が集まります。';
	// console.log(getSegments(str, []));

	const text = document.getElementById('segmenter-text') as HTMLTextAreaElement;
	const pn   = document.getElementById('segmenter-pn') as HTMLTextAreaElement;
	const btn  = document.getElementById('apply-segmenter') as HTMLButtonElement;
	const res  = document.getElementById('segmenter-result') as HTMLParagraphElement;

	btn.addEventListener('click', () => {
		const t = text.value;
		const pns = pn.value.split('\n').map(e => e.trim()).filter(e => e.length);
		const df = getSegments(t, pns);

		res.innerHTML = '';
		if (df) {
			for (const s of df) {
				const span = document.createElement('span') as HTMLSpanElement;
				span.innerText = s;
				res.appendChild(span);
			}
		}
	});

});
