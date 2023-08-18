import 'package:ita_mobile/src/interactor/models/challenge_model.dart';

import '../exceptions/challenge_exception.dart';

sealed class ChallengeState {
  final ChallengeModel? challenge;
  final bool loading;
  final ChallengeException? exception;

  const ChallengeState({
    this.challenge,
    this.loading = false,
    this.exception,
  });

  factory ChallengeState.start() => const StartChallengeState();

  ChallengeState setChallenge(ChallengeModel challenge) {
    return GettedChallengeState(challenge: challenge);
  }

  ChallengeState setLoading() {
    return const LoadingChallengeState();
  }

  ChallengeState setError(ChallengeException exception) {
    return ErrorChallengeState(exception: exception);
  }
}

class StartChallengeState extends ChallengeState {
  const StartChallengeState() : super();
}

class LoadingChallengeState extends ChallengeState {
  const LoadingChallengeState() : super(loading: true);
}

class GettedChallengeState extends ChallengeState {
  const GettedChallengeState({required super.challenge});
}

class ErrorChallengeState extends ChallengeState {
  const ErrorChallengeState({required super.exception}) : super(loading: false);
}
