//首先引用gulp

var gulp = require ('gulp');

//引用代码合并的插件
var concat = require('gulp-concat');

var press = require('gulp-uglify');

//执行任何任务,需调用gulp.task函数
// gulp.task('cat',function(){

// 	return gulp.src('./src/*.js')

// 		.pipe(concat('all.js'))

// 		.pipe(gulp.dest('./dist'));

// });

gulp.task('press',function(){

	gulp.src('./dist/*.js')

	.pipe(press())

	.pipe(gulp.dest('./output'));
})


  // 合并src目录下所有js文件
    gulp.task('cat',function(){
        // 确定合并哪些文件 需要合并文件的目录
        gulp.src('./src/*.js')
        // 使用gulp-concat合并 指定合并后文件的名字
        .pipe(concat('bundle.js'))
        // 将处理好的文件保存在dist文件夹中
        .pipe(gulp.dest('./dist'));
    })

    // 合并src下指定js文件而且可以指定合并顺序 
    gulp.task('cat',function(){
        // 确定合并哪些文件 需要合并文件的目录
        gulp.src([
            './src/3.js',
            './src/2.js',
            './src/1.js'
        ])
        // 使用gulp-concat合并 指定合并后文件的名字
        .pipe(concat('bundle.js'))
        // 将处理好的文件保存在dist文件夹中
        .pipe(gulp.dest('./dist'));
    })