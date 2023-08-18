import 'package:ita_mobile/src/interactor/exceptions/challenge_exception.dart';
import 'package:ita_mobile/src/interactor/models/challenge_model.dart';
import 'package:ita_mobile/src/interactor/services/challenge_service.dart';
import 'package:ita_mobile/src/interactor/state/challenge_state.dart';
import 'package:uno/uno.dart';

class ChallengeServiceImpl implements ChallengeService {
  final Uno uno;

  ChallengeServiceImpl(this.uno);

  @override
  Future<ChallengeState> getChallenge(ChallengeState state) async {
    try {
      final response = await uno.get(
        'https://api.unsplash.com/photos/random?orientation=squarish',
        headers: {
          'Authorization':
              "Client-ID H5dQ6Tk1LLJ7Quc5orG1sBVrfjjnuHfOD7MCj18cRME"
        },
      );
      final ChallengeModel challenge = ChallengeModel(
          imageAltDescription: "imageAltDescription",
          publisherName: "publisherName",
          publisherLink: "publisherLink",
          imageUrl: "imageUrl");
      return state.setChallenge(challenge);
    } on UnoError catch (e, s) {
      return state.setError(ChallengeServiceException(e.message, s));
    }
  }
}
