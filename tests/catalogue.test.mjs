import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normaliseCourse,safeImage,PORTAL} from '../public/scripts/catalogue.mjs';
test('links course cards only to the training portal, regardless of payload links',()=>{
 const c=normaliseCourse({slug:'new-course',title:'New course',description:'Summary',level:'Level 1',duration:'Self-paced',href:'https://attacker.example',units:[{answer:'private'}]});
 assert.equal(c.href,PORTAL+'/courses/new-course');assert.equal(c.units,undefined);
});
test('rejects executable image URLs, private storage and malformed course slugs',()=>{
 assert.equal(safeImage('javascript:alert(1)'),null);assert.equal(safeImage('https://attacker.example/logo.png'),null);assert.equal(safeImage('https://project.supabase.co/storage/v1/object/authenticated/private/a.png'),null);assert.equal(normaliseCourse({slug:'../../admin'}),null);
});
test('uses the original portal or public storage image, preserving the cover identity',()=>{
 assert.equal(safeImage('/images/course-covers/vpshr-cover.png'),PORTAL+'/images/course-covers/vpshr-cover.png');assert.equal(safeImage('https://project.supabase.co/storage/v1/object/public/images/cover.png'),'https://project.supabase.co/storage/v1/object/public/images/cover.png');
});
