import 'package:ita_mobile/src/interactor/state/challenge_state.dart';

abstract interface class ChallengeService {
  Future<ChallengeState> getChallenge(ChallengeState state);
}
