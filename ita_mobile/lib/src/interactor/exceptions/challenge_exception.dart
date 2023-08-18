sealed class ChallengeException implements Exception {
  final String message;
  final StackTrace? stackTrace;

  ChallengeException(this.message, [this.stackTrace]);

  @override
  String toString() {
    return "$runtimeType: $message${stackTrace == null ? '' : '\ns$stackTrace'}";
  }
}

class ChallengeServiceException extends ChallengeException {
  ChallengeServiceException(super.message, [super.stackTrace]);
}
