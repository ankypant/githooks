var gulp = require("gulp");

// Replace pre-commit hook
gulp.task("install-pre-commit", function () {
  return gulp.src("./git-hooks/*.sh").pipe(gulp.dest("./.git/hooks"));
});
