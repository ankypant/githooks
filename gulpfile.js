var gulp = require("gulp");

// Replace pre-commit hook in .git/hooks folder
gulp.task("install-pre-commit", function () {
  return gulp.src("./git-hooks/pre-commit*").pipe(gulp.dest("./.git/hooks"));
});
