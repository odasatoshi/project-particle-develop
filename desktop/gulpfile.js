'use strict';
 
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var ts = require("gulp-typescript");
var sass = require('gulp-sass');;
var del = require('del');
var runSequence = require('run-sequence');

/** ブラウザープロセスのtsファイルのビルド */
gulp.task('build-ts', function() {
  var tsconfig = require("./tsconfig.json");
  var filesGLob = tsconfig.files[0];
  return gulp.src(filesGLob)
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest('.'));
});

/** gulpソースコードの実行 */
gulp.task('serve', function () {
 
  // ブラウザープロセスの開始
  electron.start();

  // レンダラープロセスのリロード
  gulp.watch(['src/app/**/*.*'], electron.reload);

  // electronプロセスが終わったらプロセスの停止
  electron.on('quit', function () {process.exit(0)});

  // ブラウザープロセスのリスタートは特に不要にする
  //gulp.watch(['src/browser/**/*.*'], electron.restart);
});

/** クリーンアップ */
gulp.task("clean", function () {
    return del(["src/"],{force:true});
});
/** coreソースをコピーするだけのタスク */
gulp.task("copy-core-sources",function (){
    return gulp.src([
            "../core/**",
            "!../core/node_modules/**"
        ])
        .pipe(gulp.dest("src"))
});

/** coreソースをコピーするだけのタスク */
gulp.task("copy-core-require-modules",function (){
    return gulp.src([
            "../core/node_modules/angular2/**",
            "../core/node_modules/rxjs/**",
            "../core/node_modules/systemjs/**",
        ], {base: '../core/node_modules/'})
        .pipe(gulp.dest("src/node_modules/"))
});

/** ブラウザ依存のソースをコピーするタスク */
gulp.task("copy-dependent-sources",function (){
    return gulp.src([
            "platform-dependent/**"
        ])
        .pipe(gulp.dest("src/app"))
});


gulp.task("build-all", function () {
    return runSequence(
        "copy-core-sources",
        "copy-dependent-sources",
        "copy-core-require-modules",
        "build-ts"
    );
} );

gulp.task("clean-build",function () {
    return runSequence(
        "clean",
        "build-all"
    );
});